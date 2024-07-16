import { Divider, Spin, message } from 'antd';
import { Button, Card, Input, Title } from '../styled';
import { RPC_ENDPOINT } from '../App';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { publicKey } from '@metaplex-foundation/umi';
import { useState } from 'react';
import { burnToken, findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';

interface IProps {
  wallet: any;
}

export default function BurnLiquidityPoolCard({ wallet }: IProps) {
  const [tokenAddress, setTokenAddress] = useState<string>('');
  // const [accountAddress, setAccountAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);

  async function burnLiquidityPoolTokens() {
    setLoading(true);
    try {
      const umi = createUmi(RPC_ENDPOINT).use(walletAdapterIdentity(wallet)).use(mplTokenMetadata());
      const mint = publicKey(tokenAddress); 

      const signedTx = await burnToken(umi, {
        account: findAssociatedTokenPda(umi, {
          mint,
          owner: wallet.publicKey,
        }),
        mint,
        amount: parseInt(amount),
      }).buildAndSign(umi);

      await umi.rpc.sendTransaction(signedTx);
      message.success('Burned LP tokens');
    }
    catch (err) {
      message.error('Failed to burn LP tokens');
      console.error(err)
    }
    setLoading(false);
  }

  return (
    <Spin size='large' spinning={loading} delay={500}>
      <Card>
        <Title>4. Burn Liquidity Pool Tokens</Title>
        <Divider />
        <div style={{width: 300}}>
          <Input style={{maxWidth: 300, marginBottom: 20}} placeholder="LP Token Address" onChange={(e) => setTokenAddress(e.target.value) } disabled={loading} />
          {/* <Input style={{maxWidth: 300, marginBottom: 20}} placeholder="LP Account Address" onChange={(e) => setAccountAddress(e.target.value) } disabled={loading} /> */}
          <Input style={{maxWidth: 300}} type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value) } disabled={loading} />
          <Button style={{width: '100%', justifyContent: 'center'}} onClick={burnLiquidityPoolTokens} disabled={loading}>Burn LP tokens</Button>
        </div>
      </Card>
    </Spin>
  );
}
