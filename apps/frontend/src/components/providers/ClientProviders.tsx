'use client';

import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const WalletContextProvider = dynamic(
  () => import('../wallet/WalletContextProvider').then(mod => mod.WalletContextProvider),
  {
    ssr: false,
    loading: () => null
  }
);

interface Props {
  children: ReactNode;
}

export function ClientProviders({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <WalletContextProvider>{children}</WalletContextProvider>;
} 