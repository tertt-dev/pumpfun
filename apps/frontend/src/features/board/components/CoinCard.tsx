'use client';

import { memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrendingCoin } from '@/shared/types/coin';
import { formatMarketCap } from '@/shared/utils/string';

interface CoinCardProps {
  coin: TrendingCoin;
  className?: string;
}

export const CoinCard = memo(function CoinCard({ coin, className }: CoinCardProps) {
  return (
    <div className={cn("coin-item min-w-[280px] max-w-[280px]", className)}>
      <div className="relative overflow-visible">
        <Link 
          draggable="false" 
          className="block w-full" 
          href={`/coin/${coin.id}`}
        >
          <div className="carousel-card relative flex flex-col overflow-hidden rounded-xl bg-[#1C2530] p-3 text-slate-300 hover:bg-[#2F3741] hover:bg-opacity-10 hover:shadow-xl">
            <div className="flex flex-row">
              <div className="relative mr-3 flex-shrink-0" style={{ width: '72px', height: '72px' }}>
                {coin.isLive && (
                  <span className="absolute bottom-2 left-2 flex items-center">
                    <span className="rounded-sm bg-green-300 px-[6px] text-xs font-bold text-black">LIVE</span>
                  </span>
                )}
                <img 
                  alt={coin.name}
                  draggable="false" 
                  loading="lazy" 
                  width="72" 
                  height="72" 
                  decoding="async" 
                  data-nimg="1"
                  className="aspect-square h-full w-full rounded-md object-cover"
                  src={`${coin.image}?img-width=72&img-dpr=2&img-onerror=redirect`}
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="flex h-full flex-1 flex-col gap-1 text-[12px] leading-[16px] min-w-0">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full flex-col">
                    <span className="truncate text-[14px] font-bold text-white">{coin.name}</span>
                    <span className="text-[14px] font-bold text-white">({coin.symbol})</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center text-[12px] text-green-300">
                    <span className="font-medium text-green-300">market cap: $</span>
                    {formatMarketCap(coin.marketCap)}
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#9DA3AE]">replies: {coin.replies}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] line-clamp-2 w-full overflow-hidden text-ellipsis pl-1 pr-1 text-left text-[14px] font-medium text-[#F8FAFC]">
            {coin.description}
          </div>
        </Link>
      </div>
    </div>
  );
}); 