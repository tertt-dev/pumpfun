'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';
import { WalletViewDialog } from './WalletViewDialog';

// Add Phantom window type
declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect: () => Promise<void>;
      };
    };
  }
}

export function WalletConnectButton() {
  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWalletView, setShowWalletView] = useState(false);

  const handleLogout = () => {
    disconnect();
    setShowDropdown(false);
  };

  if (!connected) {
    return (
      <div 
        className="relative transition-colors"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <button
          onClick={() => setVisible(true)}
          className="h-8 w-20 rounded bg-green-300 px-3 py-1 text-sm font-semibold text-black hover:bg-green-500"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          log in
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex h-8 items-center justify-center rounded-md bg-[#303947] p-2 text-sm text-white"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={showDropdown}
      >
        <div>
          <img
            alt=""
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            className="h-4 w-4 rounded-full object-contain"
            src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
            style={{ color: 'transparent' }}
          />
        </div>
        <div>B1xVWx</div>
        <span className="hidden sm:block"> </span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
        </svg>
      </button>

      {showDropdown && (
        <div
          className="absolute right-0 top-full z-50 mt-1"
        >
          <div
            data-side="bottom"
            data-align="center"
            data-state="open"
            role="dialog"
            className="w-[131px] rounded-sm text-sm"
            tabIndex={-1}
          >
            <div className="pt-1">
              <div className="flex w-[131px] flex-col gap-3 rounded-md bg-[#30394A] p-4">
                <a
                  href={`/profile/${publicKey?.toBase58()}`}
                  className="text-[#F8FAFC] transition hover:font-bold hover:underline"
                >
                  profile
                </a>
                <span
                  className="cursor-pointer text-[#F8FAFC] transition hover:font-bold hover:underline"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:rc:"
                  data-state="closed"
                  onClick={() => {
                    setShowDropdown(false);
                    setShowWalletView(true);
                  }}
                >
                  view wallet
                </span>
                <div className="h-[1px] w-full bg-[#374151]" />
                <button
                  onClick={handleLogout}
                  className="text-left text-[#E77A75] transition hover:font-bold hover:underline"
                >
                  log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showWalletView && (
        <WalletViewDialog
          onClose={() => setShowWalletView(false)}
          username="B1xVWx"
        />
      )}
    </div>
  );
} 