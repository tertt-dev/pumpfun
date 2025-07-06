'use client';

import Image from 'next/image';
import { DialogOverlay } from './DialogOverlay';

interface SignMessageDialogProps {
  onClose: () => void;
  onBack: () => void;
}

export function SignMessageDialog({ onClose, onBack }: SignMessageDialogProps) {
  return (
    <DialogOverlay onClose={onClose}>
      <div role="dialog" className="fixed left-[50%] top-[50%] z-[999] grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg w-[356px] bg-background p-4 text-center text-white">
      <div className="grid">
        <div className="flex items-center justify-between">
          <div className="h-4 w-4 rounded-full bg-grey-4 cursor-pointer" onClick={onBack}>
            <Image
              src="/_next/static/media/arrow_left.b51add39.svg"
              alt="back"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
          <div>sign message</div>
          <div>
            <Image
              src="/_next/static/media/close_icon.83f796f3.svg"
              alt="close"
              width={16}
              height={16}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="my-8 flex w-full items-center justify-center">
          <Image
            src="/_next/static/media/logo-pump.80ada4f8.svg"
            alt="logo"
            width={72}
            height={72}
          />
        </div>
        <div>
          <div className="flex w-full justify-center gap-3 px-4 py-2">
            <div>click <span className="text-primary-foreground-green">confirm</span> in your wallet</div>
            <div data-testid="oval-loading" aria-label="oval-loading" aria-busy="true" role="progressbar" className="sc-blHHSb lZBCK">
              <svg width="16" height="20" viewBox="-20 -20 42 42" xmlns="http://www.w3.org/2000/svg" stroke="white" data-testid="oval-svg">
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(1 1)" strokeWidth="2" data-testid="oval-secondary-group">
                    <circle strokeOpacity=".5" cx="0" cy="0" r="20" stroke="#4fa94d" strokeWidth="2"></circle>
                    <path d="M20 0c0-9.94-8.06-20-20-20">
                      <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="1s" repeatCount="indefinite"></animateTransform>
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-[10px] font-normal text-grey-2">This proves wallet ownership</div>
        </div>
      </div>
    </div>
    </DialogOverlay>
  );
} 