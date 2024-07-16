import React, { useState } from 'react';
import { Card, Title, Button } from '../styled';
import { Divider, Input, Spin, message } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { setAuthority, AuthorityType } from '@metaplex-foundation/mpl-toolbox';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey, none, publicKey } from '@metaplex-foundation/umi';
import { RPC_ENDPOINT } from '../App';

interface RevokeAuthorityCardProps {
  createdTokenAddress: PublicKey | null;
  advanceStep: () => void;
}

export default function RevokeAuthorityCard({ createdTokenAddress, advanceStep }: RevokeAuthorityCardProps) {
  const wallet = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenAddress, setTokenAddress] = React.useState<PublicKey>();

  React.useEffect(() => {
    if (createdTokenAddress) {
      setTokenAddress(createdTokenAddress);
    }
  }, [createdTokenAddress]);

  const revokeMintAuthority = async () => {
    if (!tokenAddress || !wallet.publicKey) {
      message.error('Token address or wallet public key is missing.');
      return;
    }
    setLoading(true)
    try {
      const umi = createUmi(RPC_ENDPOINT)
        .use(walletAdapterIdentity(wallet))
        .use(mplTokenMetadata());
      await setAuthority(umi, {
        owned: tokenAddress,
        owner: publicKey(wallet.publicKey),
        authorityType: AuthorityType.MintTokens,
        newAuthority: none(),
      }).sendAndConfirm(umi);
      message.success('Minting authority revoked! 🎉');
    } catch (err) {
      console.error(err);
      message.error('An error occurred while revoking authority.');
    }
    setLoading(false);
  };

  const revokeFreezeAuthority = async () => {
    if (!tokenAddress || !wallet.publicKey) {
      message.error('Token address or wallet public key is missing.');
      return;
    }
    setLoading(true)
    try {
      const umi = createUmi(RPC_ENDPOINT)
        .use(walletAdapterIdentity(wallet))
        .use(mplTokenMetadata());
      await setAuthority(umi, {
        owned: tokenAddress,
        owner: publicKey(wallet.publicKey),
        authorityType: AuthorityType.FreezeAccount,
        newAuthority: null,
      }).sendAndConfirm(umi);
      message.success('Freeze authority revoked! 🎉');
      advanceStep();
    } catch (err) {
      console.error(err);
      message.error('An error occurred while revoking authority.');
    }
    setLoading(false);
  };

  return (
    <Spin size='large' spinning={loading} delay={500}>
      <Card>
        <Title>2. Revoke Token Authority</Title>
        <Divider />
        <div style={{maxWidth: 300}}>
          <Input style={{maxWidth: 300}} onChange={(e)=> setTokenAddress(publicKey(e.target.value))} placeholder="Token Address" value={tokenAddress?.toString()} disabled={loading} />
          <Button style={{ marginBottom: '16px', width: '100%', justifyContent: 'center' }} onClick={revokeMintAuthority} disabled={!tokenAddress || loading}>
            Revoke Mint Authority
          </Button>
          <Button style={{ marginBottom: '16px', width: '100%', justifyContent: 'center' }} onClick={revokeFreezeAuthority} disabled={!tokenAddress || loading}>
            Revoke Freeze Authority
          </Button>
        </div>
      </Card>
    </Spin>
  );
}
