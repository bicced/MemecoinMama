import { Card, Title, Button } from '../styled';
import { Divider } from 'antd';
import RaydiumLogo from '../assets/raydium.png';

interface CreateLiquidityPoolCardProps {
  advanceStep: () => void;
}

export default function CreateLiquidityPoolCard({ advanceStep }: CreateLiquidityPoolCardProps) {
  return (
    <Card>
      <Title>3. Create Liquidity Pool</Title>
      <Divider />
      <div style={{maxWidth: 300}}>
        <img src={RaydiumLogo} alt="Raydium Logo" style={{ width: '200px', margin: '16px 0' }} />
        <Button
          style={{ marginBottom: '16px', width: '100%', justifyContent: 'center' }}
          onClick={() => window.open('https://raydium.io/create-market/', '_blank')}
        >
          Create Openbook Market
        </Button>
        <Button
          style={{ marginBottom: '16px', width: '100%', justifyContent: 'center' }}
          onClick={() => window.open('https://raydium.io/liquidity/create/', '_blank')}
        >
          Create Liquidity Pool
        </Button>
        <Divider />
        <Button style={{ width: '100%', justifyContent: 'center' }} onClick={advanceStep}>
          Next
        </Button>
      </div>
    </Card>
  );
}
