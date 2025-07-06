'use client';

import { ComponentType, FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

interface Props {
  children: ReactNode;
}

const ConnectionProviderComponent = ConnectionProvider as ComponentType<any>;
const WalletModalProviderComponent = WalletModalProvider as ComponentType<any>;

export const WalletContextProvider: FC<Props> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProviderComponent endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProviderComponent>
          <style jsx global>{`
            .wallet-adapter-modal {
              background: #1a1b1f !important;
              border: 1px solid #2a2b2f !important;
              border-radius: 16px !important;
            }
            .wallet-adapter-modal-wrapper {
              background: #1a1b1f !important;
            }
            .wallet-adapter-modal-button-close {
              background: #2a2b2f !important;
            }
            .wallet-adapter-button {
              background: #1a1b1f !important;
              border: 1px solid #2a2b2f !important;
              height: 50px !important;
              font-weight: normal !important;
              color: white !important;
              margin: 4px 0 !important;
              padding: 0 16px !important;
              border-radius: 16px !important;
            }
            .wallet-adapter-button:hover {
              background: rgba(255, 255, 255, 0.1) !important;
            }
            .wallet-adapter-modal-title {
              color: white !important;
            }
            .wallet-adapter-modal-list {
              margin: 0 !important;
            }
          `}</style>
          {children}
        </WalletModalProviderComponent>
      </WalletProvider>
    </ConnectionProviderComponent>
  );
};

// For dynamic import
export default WalletContextProvider; 