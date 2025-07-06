'use client';

import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { DialogOverlay } from './DialogOverlay';

interface WalletSelectionDialogProps {
  onClose: () => void;
  onPhantomSelect: () => void;
}

export function WalletSelectionDialog({ onClose, onPhantomSelect }: WalletSelectionDialogProps) {
  return (
    <DialogOverlay onClose={onClose}>
      <div role="dialog" className="fixed left-[50%] top-[50%] z-[999] grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg w-[356px] bg-background p-4 text-center text-white">
      <div className="grid gap-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h2 className="text-lg">connect or create wallet</h2>
          </div>
          <div className="ml-auto mt-[-22px]">
            <Image
              src="close_icon.83f796f3.svg"
              alt="close"
              width={16}
              height={16}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div>
            <Image
              src="logo-pump.80ada4f8.svg"
              alt="logo"
              width={72}
              height={72}
              className="m-6"
            />
          </div>
          <div className="mt-3 w-full">
            <button className="bg-background-dark mb-3 flex w-full items-center justify-between rounded-2xl border border-grey-1 px-4 py-3 text-sm text-slate-50 transition-colors duration-150 hover:bg-slate-900/90">
              <div className="flex">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.7492 6.5C15.7492 8.57107 14.0702 10.25 11.9992 10.25C9.9281 10.25 8.24917 8.57107 8.24917 6.5C8.24917 4.42893 9.9281 2.75 11.9992 2.75C14.0702 2.75 15.7492 4.42893 15.7492 6.5Z" stroke="#9DA3AE" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M11.9992 13.25C8.60802 13.25 6.03516 15.2643 4.98164 18.1129C4.57284 19.2182 5.51749 20.25 6.696 20.25H17.3023C18.4808 20.25 19.4255 19.2182 19.0167 18.1129C17.9632 15.2643 15.3903 13.25 11.9992 13.25Z" stroke="#9DA3AE" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <div className="ml-3 flex flex-col justify-start text-[14px]">
                    <span className="text-left">login with email or socials</span>
                    <div className="text-left text-[10px] font-normal text-[#9DA3AE]">zero confirmation trading</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#DEDEE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-[-12px] flex items-center">
          <div className="h-[1px] flex-grow bg-grey-1"></div>
          <span className="mx-2 text-grey-1">or</span>
          <div className="h-[1px] flex-grow bg-grey-1"></div>
        </div>
        <div className="custom-scrollbar -mt-3 max-h-[400px] overflow-auto">
          <div className="mt-3 flex items-center justify-center">
            <button 
              onClick={onPhantomSelect}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 bg-background-dark h-[50px] w-full justify-start rounded-2xl border border-grey-1 px-4 py-3 font-normal text-white"
            >
              <img
                alt="Phantom"
                width={24}
                height={24}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo="
                className="mr-3"
              />
              Phantom
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 bg-background-dark h-[50px] w-full justify-start rounded-2xl border border-grey-1 px-4 py-3 font-normal text-white">
            <Image
              src="wallet.719cd083.svg"
              alt=""
              width={24}
              height={24}
              className="mr-3"
            />
            more wallets
          </button>
        </div>
      </div>
    </div>
    </DialogOverlay>
  );
} 