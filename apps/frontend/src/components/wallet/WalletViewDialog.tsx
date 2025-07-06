'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';

interface Props {
  onClose: () => void;
  username: string;
}

export function WalletViewDialog({ onClose, username }: Props) {
  const { publicKey, disconnect } = useWallet();

  const truncateAddress = (address: string) => {
    if (!address) return '';
    const start = address.slice(0, 4);
    const end = address.slice(-4);
    return `${start}...${end}`;
  };

  const handleCopyAddress = async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey.toBase58());
    }
  };

  const handleDisconnect = () => {
    disconnect();
    onClose();
  };

  return (
    <div
      role="dialog"
      className="fixed left-[50%] top-[50%] z-[999] grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 sm:rounded-lg w-[356px] bg-[#15161b] p-4 text-center text-white"
      tabIndex={-1}
      style={{ pointerEvents: 'auto' }}
    >
      <h2 className="text-lg font-semibold leading-none tracking-tight text-gray-200 absolute h-0 w-0">
        <span className="clip-[rect(0,0,0,0)] absolute h-0 w-0 overflow-hidden whitespace-nowrap border-0 p-0">
          Sign wallet
        </span>
      </h2>
      <div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col justify-items-start gap-1">
            <div className="flex w-full items-center justify-between">
              <div></div>
              <div className="flex items-center justify-center gap-2">@{username}</div>
              <div>
                <Image
                  src="/close_icon.83f796f3.svg"
                  alt="close"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                  onClick={onClose}
                />
              </div>
            </div>
            <div></div>
            <div className="flex items-center justify-center">
              <div className="flex cursor-pointer items-center gap-2 rounded border border-slate-500 px-1 hover:bg-slate-700">
                edit profile
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="my-8 flex items-start gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=56&img-dpr=2&img-onerror=redirect"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border border-slate-600 object-contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="rounded text-xs sm:text-sm">
              {publicKey ? truncateAddress(publicKey.toBase58()) : ''}
            </div>
            <div className="flex w-6 cursor-pointer items-center justify-center p-1">
              <button className="cursor-pointer" onClick={handleCopyAddress}>
                <Image
                  src="/wallet_copy.7e28e889.svg"
                  alt="Copy Wallet Address"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <button className="mt-3 flex w-80 items-center justify-between rounded-2xl border border-gray-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Image
                src="/wallet.719cd083.svg"
                alt="phantom"
                width={24}
                height={24}
              />
              <div>
                <div className="text-base font-bold">transfer from wallet</div>
                <div className="text-left text-xs text-grey-5">no limits • instant</div>
              </div>
            </div>
            <Image
              src="/phantom.d96fea1d.svg"
              alt="phantom"
              width={20}
              height={20}
            />
          </button>
          <div className="my-3 flex w-full items-center">
            <div className="h-[1px] w-full flex-grow bg-grey-1"></div>
            <span className="mx-2 text-grey-1">or</span>
            <div className="h-[1px] w-full flex-grow bg-grey-1"></div>
          </div>
          <div className="w-full">
            <button
              onClick={handleDisconnect}
              data-fs-event="wallet_disconnected"
              className="h-10 w-full rounded-lg !bg-grey-3 text-white hover:underline"
            >
              disconnect wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 