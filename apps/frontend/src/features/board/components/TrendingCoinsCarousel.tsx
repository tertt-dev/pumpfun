'use client';

import { memo, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSidebarState } from '@/hooks/use-sidebar-state';
import { useCarousel } from '../hooks/useCarousel';
import { CoinCard } from './CoinCard';
import { TrendingCoin } from '@/shared/types/coin';

interface TrendingCoinsCarouselProps {
  coins: TrendingCoin[];
  className?: string;
}

export const TrendingCoinsCarousel = memo(function TrendingCoinsCarousel({ 
  coins,
  className 
}: TrendingCoinsCarouselProps) {
  const { width: sidebarWidth } = useSidebarState();
  const { 
    containerRef, 
    state: { isAtStart, isAtEnd }, 
    scrollLeft, 
    scrollRight,
    updateScrollState 
  } = useCarousel();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(container);

    container.addEventListener('scroll', updateScrollState);
    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <section className="relative mb-6">
      <div className="mb-2 flex items-center justify-between px-6">
        <h2 className="text-[16px] font-semibold text-white">now trending</h2>
        <div className="flex space-x-2">
          <button 
            className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75 disabled:opacity-30 disabled:cursor-not-allowed" 
            aria-label="scroll left"
            onClick={scrollLeft}
            disabled={isAtStart}
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          <button 
            className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75 disabled:opacity-30 disabled:cursor-not-allowed" 
            aria-label="scroll right"
            onClick={scrollRight}
            disabled={isAtEnd}
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div 
          ref={containerRef}
          className="flex w-full gap-3 overflow-x-auto pb-4 px-6 hide-scrollbar"
          style={{ 
            width: '100%',
            maxWidth: `calc(100vw - ${sidebarWidth}px - 2px)`
          }}
        >
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </section>
  );
}); 