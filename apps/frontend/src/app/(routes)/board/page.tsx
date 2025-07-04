'use client';

import { SearchBar } from '@/features/board/components/SearchBar';
import { FilterSection } from '@/features/board/components/FilterSection';
import { TrendingCoinsCarousel } from '@/features/board/components/TrendingCoinsCarousel';
import { CoinGrid } from '@/features/board/components/CoinGrid/CoinGrid';
import { TRENDING_COINS } from '@/features/board/data/mock-data';
import { MOCK_COINS } from '@/features/board/data/coins-mock-data';
import { FilterState } from '@/features/board/types/filters';

export default function BoardPage() {
  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query);
  };

  const handleFilterChange = (filters: FilterState) => {
    // TODO: Implement filter functionality
    console.log('Filters changed:', filters);
  };

  return (
    <div className="mt-4">
      <div className="flex w-full md:justify-center mb-8 mt-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="w-full max-w-full overflow-hidden">
        <TrendingCoinsCarousel coins={TRENDING_COINS} />
      </div>

      <div className="mb-2 flex gap-4 sm:mb-0">
        <button className="grid cursor-pointer gap-1 text-green-300">
          explore
          <span className="h-1 w-full rounded bg-green-300"></span>
        </button>
        <button className="grid cursor-pointer gap-1 text-gray-500">
          watchlist
        </button>
      </div>

      <div className="my-1">
        <FilterSection onFilterChange={handleFilterChange} />
      </div>

      <CoinGrid coins={MOCK_COINS} />
    </div>
  );
}