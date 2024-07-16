import { useState } from 'react';
import { Button, Card, Form, Input, Title } from '../styled';
import { Divider, Spin, Upload, message } from 'antd';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { createAndMint, mplTokenMetadata, TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey, generateSigner, percentAmount } from '@metaplex-foundation/umi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { createToken, updateToken } from '../api';
import { RPC_ENDPOINT } from '../App';

interface IProps {
  wallet: any;
  onTokenCreate: (mint: PublicKey) => void;
  advanceStep: () => void;
}

export default function CreateTokenForm({ wallet, onTokenCreate, advanceStep }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleUpload = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPngOrSvgOrGif = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml' || file.type === 'image/gif';
    if (!isJpgOrPngOrSvgOrGif)
      message.error('You can only upload JPG/PNG/SVG/GIF file!');
    const isLt2M = file.size / 1024 / 1024 < 1;
    if (!isLt2M)
      message.error('Image must smaller than 1MB!');
    return isJpgOrPngOrSvgOrGif && isLt2M;
  }

  const imageUploadButton = (
    <div style={{ textAlign: 'center' }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Logo</div>
    </div>
  );

  async function createAndMintToken(formdata: any) {
    setLoading(true);
    try {
      const formatData = {
        name: formdata.name,
        symbol: formdata.symbol,
        description: formdata.description || '',
        logo: imageUrl?.replace(/^data:image\/\w+;base64,/, ""),
        wallet: wallet.publicKey.toString()
      }
      const {metadataURL, docId} = await createToken(formatData);
      const umi = createUmi(RPC_ENDPOINT).use(walletAdapterIdentity(wallet)).use(mplTokenMetadata());
      const mint = generateSigner(umi);
      await createAndMint(umi, {
        mint,
        name: formdata.name,
        symbol: formdata.symbol,
        decimals: parseInt(formdata.decimals),
        uri: metadataURL,
        sellerFeeBasisPoints: percentAmount(parseInt(formdata.fee)),
        amount: parseInt(formdata.amount) * Math.pow(10, parseInt(formdata.decimals)),
        tokenOwner: umi.identity.publicKey,
        tokenStandard: TokenStandard.Fungible,
      }).sendAndConfirm(umi);
      message.success(`${formdata.amount} ${formdata.symbol} minted! 🎉`);
      void updateToken(docId, {tokenAddress: mint.publicKey.toString()});
      onTokenCreate(mint.publicKey);
      advanceStep();
    }
    catch (err) {
      console.error(err);
      message.error('Error minting token!');
    }
    setLoading(false);
  }

  return (
    <Spin size='large' spinning={loading} delay={500}>
      <Card>
        <Title>1. Create & Mint Token</Title>
        <Divider />
        <Form
          onFinish={createAndMintToken}
          layout="vertical"
        >
          <Form.Item
            name="logo"
            label="Logo"
            rules={[{ required: true, message: 'Please select a logo!' }]}
          >
            <Upload
              listType="picture-card"
              showUploadList={false}
              onChange={handleUpload}
              beforeUpload={beforeUpload}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : imageUploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please select a name!' }]}
          >
            <Input placeholder='MemecoinMama' disabled={loading} />
          </Form.Item>
          <Form.Item
            name="symbol"
            label="Symbol"
            rules={[{ required: true, message: 'Please select a symbol!' }]}
          >
            <Input placeholder='Mama' disabled={loading} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
          >
            <Input.TextArea placeholder='This is the greatest mama of them all!' disabled={loading} />
          </Form.Item>
          <Form.Item
            name="decimals"
            label="Decimals"
            rules={[{ required: true, message: 'Please select a decimals!' }]}
          >
            <Input placeholder='9' type="number" disabled={loading} />
          </Form.Item>
          <Form.Item
            name="fee"
            label="Fee %"
            rules={[{ required: true, message: 'Please select a fee!' }]}
          >
            <Input placeholder='0' type="number" disabled={loading} />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please select a amount!' }]}
          >
            <Input placeholder='1000000000' type="number" disabled={loading} />
          </Form.Item>
          <Button htmlType="submit" block style={{justifyContent: 'center'}} disabled={loading}>
            Create and Mint
          </Button>
        </Form>
      </Card>
    </Spin>
  );
}
