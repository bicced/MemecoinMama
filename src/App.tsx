import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletMultiButton, WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import { useMemo, 
  useState 
} from 'react';

import Home from './pages/Home';
import Create from './pages/Create';
import Disclaimer from './pages/Disclaimer';
import textLogo from './assets/textLogo.svg';

// import the styles
import '@solana/wallet-adapter-react-ui/styles.css';
import { Navbar } from './styled';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, TwitterOutlined, DiscordOutlined } from '@ant-design/icons';
import { InfoModal } from './components/InfoModal';

export const RPC_ENDPOINT = 'https://quick-cosmological-bird.solana-mainnet.quiknode.pro/30fbc6bddb69aeffead62e48b17b2ac53cb37627/';

export default function App() {
    const navigator = useNavigate();
    const solNetwork = WalletAdapterNetwork.Mainnet;
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network: solNetwork }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
        ],
        [solNetwork]
    );
    const [showModal, setShowModal] = useState(false);

    return (
      <ConnectionProvider endpoint={RPC_ENDPOINT}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <Navbar>
              <img src={textLogo} style={{maxHeight: 60}} onClick={() => navigator('/')} />
              <WalletMultiButton />
            </Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
            <FloatButton.Group shape="square" style={{ left: 20 }}>
              <FloatButton onClick={() => setShowModal(true)} icon={<QuestionCircleOutlined />} />
              <FloatButton onClick={() => window.open('https://twitter.com/memecoinmama', '_blank')} icon={<TwitterOutlined />} />
              <FloatButton onClick={() => window.open('https://discord.gg/4rv6a4JEYg', '_blank')} icon={<DiscordOutlined />} />
            </FloatButton.Group>
            {showModal && <InfoModal closeModal={() => setShowModal(false)} />}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
}
