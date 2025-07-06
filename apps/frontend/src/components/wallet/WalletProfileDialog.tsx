'use client';

инфа import { useWallet } from '@solana/wallet-adapter-react';
import { DialogOverlay } from './DialogOverlay';

interface Props {
  onClose: () => void;
  publicKey: string;
  username: string;
}

export function WalletProfileDialog({ onClose, publicKey, username }: Props) {
  const { disconnect } = useWallet();

  const handleDisconnect = () => {
    disconnect();
    onClose();
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(publicKey);
  };

  return (
    <DialogOverlay onClose={onClose}>
      <div className="w-[400px] rounded-2xl bg-background-dark p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-white">Profile</h2>
          <button
            onClick={onClose}
            className="text-grey-1 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-4">
            <img
              src={`https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=56&img-dpr=2&img-onerror=redirect`}
              alt="Profile"
              className="h-16 w-16 rounded-full object-contain"
            />
            <div>
              <h3 className="text-lg font-medium text-white">@{username}</h3>
              <p className="text-sm text-grey-1">{publicKey.slice(0, 4)}...{publicKey.slice(-4)}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <button
              onClick={handleCopyAddress}
              className="flex w-full items-center justify-between rounded-xl border border-grey-1 p-4 text-left text-white hover:bg-grey-1/10"
            >
              <span>Copy address</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>

            <button
              onClick={handleDisconnect}
              className="flex w-full items-center justify-between rounded-xl border border-grey-1 p-4 text-left text-white hover:bg-grey-1/10"
            >
              <span>Disconnect</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </DialogOverlay>
  );
} 