'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useEffect, useState } from 'react';

export function useWalletAuth() {
  const { wallet, publicKey, connected, disconnect } = useWallet();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!publicKey && connected);
  }, [publicKey, connected]);

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  }, [disconnect]);

  return {
    isAuthenticated,
    publicKey,
    wallet,
    disconnect: handleDisconnect,
  };
} 