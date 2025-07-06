'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto mt-1 grid w-full max-w-6xl items-start gap-4 px-2 text-white">
      <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Something went wrong!</h2>
        <p className="text-gray-400">{error.message}</p>
        <div className="flex gap-4">
          <Button onClick={reset}>Try again</Button>
          <Link href="/board">
            <Button variant="outline">Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 