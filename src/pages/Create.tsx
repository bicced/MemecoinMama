import { useState } from 'react';
import { Card, Container, Title, StyledSteps } from '../styled';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import CreateTokenForm from '../components/CreateTokenForm';
import RevokeAuthorityCard from '../components/RevokeAuthorityCard';
import CreateLiquidityPoolCard from '../components/CreateLiquidityPoolCard';
import BurnLiquidityPoolCard from '../components/BurnLiquidityPoolCard';
import { PublicKey } from '@metaplex-foundation/umi';

const steps = [
  {
    title: 'Create',
    key: '1',
  },
  {
    title: 'Revoke',
    key: '2',
  },
  {
    title: 'Pool',
    key: '3',
  },
  {
    title: 'Burn',
    key: '4',
  },
];

export default function TokenCreator() {
  const wallet = useWallet();
  const [current, setCurrent] = useState(0);
  const [createdTokenAddress, setCreatedTokenAddress] = useState<PublicKey|null>(null);

  function renderStepContent() {
    switch (steps[current].key) {
      case '1':
        return <CreateTokenForm wallet={wallet} onTokenCreate={setCreatedTokenAddress} advanceStep={() => setCurrent((cur) => cur + 1)} />;
      case '2':
        return <RevokeAuthorityCard createdTokenAddress={createdTokenAddress} advanceStep={() => setCurrent((cur) => cur + 1)} />;
      case '3':
        return <CreateLiquidityPoolCard advanceStep={() => setCurrent((cur) => cur + 1)} />;
      case '4':
        return <BurnLiquidityPoolCard wallet={wallet} />;
      default:
        return null;
    }
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <Container style={{display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
      <StyledSteps type="default" current={current} items={items} onChange={(e) => setCurrent(e)} />
      {!wallet.connected ? (
        <Card>
          <Title>Connect Wallet</Title>
          <WalletMultiButton />
        </Card>
      ) : (
        renderStepContent()
      )}
    </Container>
  );
}
