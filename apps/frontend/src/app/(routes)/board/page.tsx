'use client';

import Link from 'next/link';
import { SearchBar } from '@/features/board/components/SearchBar';
import { TrendingCoinsCarousel } from '@/features/board/components/TrendingCoinsCarousel';
import { TRENDING_COINS } from '@/features/board/data/mock-data';

export default function BoardPage() {
  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-8">
      <Link
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50 hover:underline"
        href="/create"
      >
        [start a new coin]
      </Link>
      
      <div className="flex w-full md:justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="w-full max-w-full overflow-hidden">
        <TrendingCoinsCarousel coins={TRENDING_COINS} />
      </div>
    </div>
  );
}