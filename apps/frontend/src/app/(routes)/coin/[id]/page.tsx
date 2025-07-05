'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SimilarCoinsCarousel } from '@/features/board/components/SimilarCoinsCarousel';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  marketCap: string;
  replies: number;
  creator: {
    address: string;
    avatar: string;
    displayName: string;
  };
  createdAt: string;
}

export default function CoinDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockCoinData: CoinData = {
      id: params.id,
      name: 'POOP',
      symbol: 'POOP',
      marketCap: '$4,157',
      replies: 16,
      creator: {
        address: 'FP28ArhJn8ovU5xY6uFi1LmKb8CLqs9BMxNJjGBjYz8Z',
        avatar: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
        displayName: 'FP28Ar'
      },
      createdAt: '24 minutes ago'
    };

    setCoinData(mockCoinData);
    setLoading(false);
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="max-w-8xl mx-auto mb-16 hidden p-4 md:block">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-20 mb-4"></div>
          <div className="h-6 bg-gray-700 rounded w-64"></div>
        </div>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="max-w-8xl mx-auto mb-16 hidden p-4 md:block">
        <div className="text-red-400">Coin not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto mb-16 hidden overflow-x-hidden md:block">
      <div className="flex flex-col px-4">
        <div className="flex w-full">
          <div className="flex-1 min-w-0 space-y-4">
            <div className="mb-1 mt-1 flex">
              <button 
                onClick={handleGoBack}
                className="flex items-center justify-between text-sm text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50 hover:underline"
              >
                [go back]
              </button>
            </div>

            <div className="mb-1 flex w-full flex-wrap items-center justify-between gap-x-[0.5px] gap-y-[14px] text-sm font-normal">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-shrink-0 text-sm font-medium text-[#F8FAFC]">
                  {coinData.name} ({coinData.symbol})
                </div>
                
                <div className="inline-flex flex-shrink-0 items-center gap-4 text-[#9DC4F8]">
                  <a href={`/profile/${coinData.creator.address}`}>
                    <span className="flex items-center gap-1">
                      <img 
                        alt="" 
                        loading="lazy" 
                        width="16" 
                        height="16" 
                        decoding="async" 
                        className="rounded h-4 w-4" 
                        src={coinData.creator.avatar}
                        style={{ color: 'transparent' }}
                      />
                      <span 
                        className="flex gap-1 rounded px-1 hover:underline text-black" 
                        style={{ backgroundColor: 'rgb(224, 167, 241)' }}
                      >
                        {coinData.creator.displayName}
                      </span>
                    </span>
                  </a>
                  <span>{coinData.createdAt}</span>
                </div>
                
                <div className="flex items-center gap-2 text-green-300">
                  <span className="flex-shrink-0">market cap: {coinData.marketCap}</span>
                  <div className="flex items-center gap-1"></div>
                </div>
                
                <div className="flex flex-shrink-0 items-center gap-1 text-[#9DA3AE]">
                  <button className="appearance-none bg-transparent p-0 text-[#9DA3AE] hover:underline focus:outline-none">
                    replies: {coinData.replies}
                  </button>
                </div>
              </div>
              <div className="ml-auto pl-2"></div>
            </div>

            <div className="flex flex-col overflow-y-auto">
              <div className="mb-5 w-full"></div>
              <div style={{ height: '600px', width: '100%' }}>
                <div className="flex h-full w-full flex-col">
                  <div className="relative flex-grow">
                    <div className="h-full w-full flex items-center justify-center bg-[#1E1E1E] rounded-lg border border-gray-800">
                      <div className="text-center">
                        <p className="text-gray-400 text-lg mb-2">Chart will be added soon</p>
                        <p className="text-gray-500 text-sm">Market data visualization is under development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[1000px]"></div>
            </div>

            <div className="mt-2 flex h-fit gap-2">
              <div className="cursor-pointer rounded px-1 bg-green-300 text-black">thread</div>
              <div className="cursor-pointer rounded px-1 text-gray-500 hover:bg-gray-800">trades</div>
            </div>

            <div className="mb-4 mt-1 flex items-center md:mb-1">
              <button className="flex items-center gap-1 rounded-md bg-[#303947] px-2 py-1 text-sm text-white shadow-sm transition duration-200 hover:bg-gray-600 focus:outline-none">
                sort: time (oldest)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
              </button>
              <div className="ml-2 flex cursor-pointer items-center gap-1 rounded-md bg-green-300 px-2 py-1 text-sm text-black shadow-sm transition duration-200 hover:bg-green-400 focus:outline-none">
                post a reply
              </div>
            </div>

            <div className="relative grid gap-1 text-slate-300">
              <div className="grid h-fit gap-1 bg-[#2e303a] p-1 text-sm">
                <div className="flex gap-1 text-xs">
                  <a href="/profile/FP28ArhJn8ovU5xY6uFi1LmKb8CLqs9BMxNJjGBjYz8Z">
                    <span className="flex items-center gap-1">
                      <img alt="" loading="lazy" width="16" height="16" decoding="async" className="rounded h-4 w-4" src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" style={{ color: 'transparent' }} />
                      <span className="flex gap-1 rounded px-1 hover:underline text-black" style={{ backgroundColor: 'rgb(224, 167, 241)' }}>FP28Ar (dev)</span>
                    </span>
                  </a>
                  <div className="text-slate-400">7/5/2025, 5:57:17 PM</div>
                </div>
                <div className="relative items-start gap-3 overflow-auto text-xs text-slate-300 flex">
                  <img alt="name" loading="lazy" width="800" height="800" decoding="async" className="max-h-screen w-32 cursor-pointer object-contain" src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=800&img-dpr=2&img-onerror=redirect" style={{ color: 'transparent' }} />
                  <div className="grid">
                    <div className="text-sm font-bold">POOP (POOP)</div>
                    <div className="break-anywhere"> </div>
                  </div>
                </div>
              </div>
              <div id="p120790934" className="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200">
                <div className="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400">
                  <a href="/profile/ogcqmhs5h4">
                    <span className="flex items-center gap-1">
                      <img alt="" loading="lazy" width="16" height="16" decoding="async" className="rounded h-4 w-4" src="https://pump.mypinata.cloud/ipfs/Qmd7dsZvqT71pJzWZVDyy8XuyEFZnfrM1oonzEnFLfXBiS?img-width=16&img-dpr=2&img-onerror=redirect" style={{ color: 'transparent' }} />
                      <span className="flex gap-1 rounded px-1 hover:underline text-black" style={{ backgroundColor: 'rgb(205, 129, 168)' }}>ogcqmhs5h4 </span>
                    </span>
                  </a>
                  <div>5:57:44 PM</div>
                  <div className="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    <div>10</div>
                  </div>
                  <div className="cursor-pointer justify-self-end hover:underline">[reply]</div>
                </div>
                <div className="flex items-start gap-2"><div>new meta loading</div></div>
                <div className="flex gap-2"></div>
              </div>
            </div>

            <div className="mt-4 flex w-full items-center justify-between md:mt-0">
              <div className="cursor-pointer text-sm text-white hover:underline">[scroll to top]</div>
              <div className="ml-2 flex cursor-pointer items-center gap-1 rounded-md bg-green-300 px-2 py-1 text-sm text-black shadow-sm transition duration-200 hover:bg-green-400 focus:outline-none">post a reply</div>
            </div>

            <SimilarCoinsCarousel />
          </div>

          <div className="ml-8 mt-[4.5rem] w-[350px] flex-shrink-0 space-y-4">
            <div className="space-y-4">
              <div className="grid w-[350px] gap-4">
                <div className="grid gap-4 rounded-t-lg border border-[#2F3035] bg-[#181921] p-4 text-gray-400 transition-all duration-300 ease-in-out md:rounded-lg">
                  <div className="mb-1 flex items-center justify-between">
                    <div dir="ltr" data-orientation="horizontal" className="flex-1">
                      <div role="tablist" aria-orientation="horizontal" className="h-10 items-center justify-center rounded-md bg-gray-800/50 p-1 text-gray-400 grid w-full grid-cols-2" tabIndex={0} data-orientation="horizontal" style={{ outline: 'none' }}>
                        <button type="button" role="tab" aria-selected="true" aria-controls="radix-:r213:-content-buy" data-state="active" id="radix-:r213:-trigger-buy" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=inactive]:hover:bg-gray-700/30 data-[state=inactive]:hover:text-gray-300 data-[state=active]:bg-[#1FD978] data-[state=active]:text-[#18181D]" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Buy</button>
                        <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r213:-content-sell" data-state="inactive" id="radix-:r213:-trigger-sell" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=inactive]:hover:bg-gray-700/30 data-[state=inactive]:hover:text-gray-300 data-[state=active]:bg-red-500 data-[state=active]:text-white" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Sell</button>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <button className="font-inter rounded-full border border-[#2F3036] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-800 hover:text-gray-300">Switch to POOP</button>
                    <button className="font-inter rounded-full border border-[#2F3036] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-800" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r216:" data-state="closed">Set max slippage</button>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative flex items-center rounded-md border border-[#2F3035] bg-white/5 shadow-sm">
                      <input className="flex h-10 rounded-md border border-slate-200 px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent pl-3 text-base text-white outline-none transition-all duration-300 ease-in-out" inputMode="decimal" placeholder="0.00" type="text" value="0" />
                      <div className="absolute right-2 ml-2 flex items-center">
                        <span className="mr-2 text-white">SOL</span>
                        <img alt="SOL" loading="lazy" width="32" height="32" decoding="async" className="h-8 w-8 rounded-full" srcSet="/_next/image?url=%2Fsolana-logo-square.png&w=32&q=75 1x, /_next/image?url=%2Fsolana-logo-square.png&w=64&q=75 2x" src="/_next/image?url=%2Fsolana-logo-square.png&w=64&q=75" style={{ color: 'transparent' }} />
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1 rounded-lg bg-[#181921]">
                      <button className="hover:bg-gray-800 hover:text-gray-300 font-inter rounded-full border border-[#2F3035] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">Reset</button>
                      <button className="hover:bg-gray-800 hover:text-gray-300 font-inter rounded-full border border-[#2F3035] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">0.1 SOL</button>
                      <button className="hover:bg-gray-800 hover:text-gray-300 font-inter rounded-full border border-[#2F3035] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">0.5 SOL</button>
                      <button className="hover:bg-gray-800 hover:text-gray-300 font-inter rounded-full border border-[#2F3035] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">1 SOL</button>
                      <button className="hover:bg-gray-800 hover:text-gray-300 font-inter rounded-full border border-[#2F3035] bg-white/5 px-2 py-1 text-center text-[10px] font-normal leading-3 text-[#FAFAFA] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">Max</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full rounded-lg text-sm font-medium leading-normal shadow-sm disabled:opacity-50 bg-[#1FD978] text-[#18181D] hover:bg-[#1FD978]/90">Log in to trade</button>
                  </div>
                </div>
              </div>
              <div className="grid w-full gap-4 rounded-lg border border-none bg-transparent text-gray-400 md:w-[350px]">
                <div className="h-fit items-start gap-4 flex">
                  <img alt="POOP logo" loading="lazy" width="256" height="256" decoding="async" className="w-32 cursor-pointer object-contain" src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=256&img-dpr=2&img-onerror=redirect" style={{ color: 'transparent' }} />
                  <div>
                    <div className="text-sm font-bold">POOP (POOP)</div>
                    <div className="break-anywhere break-words text-xs text-gray-400"> </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>bonding curve progress: 1%</span>
                    <button data-state="closed" className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info" aria-label="information"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </button>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max={100} className="relative h-4 overflow-hidden rounded-full dark:bg-slate-800 mt-2 w-full bg-gray-700">
                    <div data-state="indeterminate" data-max={100} className="h-full w-full flex-1 bg-green-300 transition-all dark:bg-slate-50" style={{ transform: 'translateX(-99%)' }}></div>
                  </div>
                  <div className="mt-2 flex gap-1 text-xs text-gray-400">graduate this coin to PumpSwap at $60,928 market cap.<br />there is 0.063 SOL in the bonding curve.</div>
                </div>
                <div className="flex flex-col gap-2 pt-1 text-xs font-semibold">
                  <div className="duration-400 relative flex h-6 w-full cursor-pointer items-center rounded-md bg-gray-700 px-2 py-1 text-gray-400 transition-all hover:bg-gray-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r21a:" data-state="closed">
                    <div className="flex flex-grow items-center justify-center">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <span className="font-semibold text-gray-400">add to watchlist</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2"></div>
                  <div className="w-full">
                    <button className="duration-400 relative flex h-6 w-full cursor-pointer items-center rounded-md bg-gray-700 px-2 py-1 text-gray-400 transition-all hover:bg-gray-600">
                      <div className="flex flex-grow justify-center">
                        <span className="font-semibold text-gray-400">contract address:</span>&nbsp;<span className="max-w-[120px] truncate text-xs font-light">38H3P...pump</span>
                      </div>
                      <div className="absolute right-2">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                      </div>
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="duration-400 relative flex h-6 w-full cursor-pointer items-center rounded-md bg-gray-700 px-2 py-1 text-gray-400 transition-all hover:bg-gray-600">
                      <div className="flex flex-grow items-center justify-center gap-2">
                        <img alt="mexc logo" loading="lazy" width="15" height="15" decoding="async" src="/mexc_logo.1d3f0595.svg" style={{ color: 'transparent' }} />
                        <span className="font-normal hover:underline">trade on MEXC</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" height="13" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
                      </div>
                    </button>
                  </div>
                  <div className="w-full">
                    <a target="_blank" rel="noopener noreferrer" className="duration-400 relative flex h-6 w-full cursor-pointer items-center rounded-md bg-gray-700 px-2 py-1 text-gray-400 transition-all hover:bg-gray-600" href="/advanced/coin?mintId=38H3PVrRWnFdCPF7ji8jhyxZXwRZogejT1LvoYACpump">
                      <div className="flex flex-grow items-center justify-center gap-2">
                        <img alt="pump logo" loading="lazy" width="15" height="15" decoding="async" src="/pump-logo.9e8455e1.svg" style={{ color: 'transparent' }} />
                        <span className="font-normal hover:underline">view coin in advanced</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" height="13" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="mt-2 flex items-center justify-between font-bold">Top holders <button className="whitespace-nowrap rounded-md border border-[#2F3035] bg-[#181921] px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Generate bubble map</button></div>
                  <div className="text-sm text-[#9CA3AF]">
                    <div className="grid gap-1">
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/BdrH2ezrb24qRq47zZ5JWimkkbh7x67LuenBwgWeqJrc">1. bonding curve</a> </div>
                        <div>99.77%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/EQZTp2ekHGWezhmmWU2GkVZ2T4aFb5DYafk9Z6F5eHab">2. EQZTp2</a> </div>
                        <div>0.21%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/3vaYRn1Mq45vtMdvm7iiJHEwiNsah7X1nBk2nitGw2DQ">3. 3vaYRn</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/C7snYbvUK6QoBh8b8Z35e7yLAqJgk3Gon3YHEciDVids">4. C7snYb</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/CHEjtnVAKWxSe4mRC7yxCrmXUNyaKqTM1rT19apizCvN">5. CHEjtn</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/D1QZ6vgJe7RYWYDdiYJwq1mZhJakyUimRssALzyU6fGn">6. D1QZ6v</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/Cxied4ZYHRHQ6nyN7SFYgw9E4tBHmzXpb2vc3UwBnhwB">7. Cxied4</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/CiFgCCGHuDbwYY3FM3P2FLSBiUA5x1EWCW9Eaoc88CSj">8. CiFgCC</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/CTk4AkoH3dArUKhvaSw6zXyHp8ikhwq9DY6ft7bi3BfK">9. CTk4Ak</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/BmSb5zRgQHT8DtBnyGzn51NHjXQsHsfQ2bmRfkAxo72s">10. BmSb5z</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/8ckcy2eHZr7zCtwryzeKiqgpk3eQbGjj4YED5jkb6JWp">11. 8ckcy2</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/7JJqUrvu73xbKCPk8QPmYzTkYS5mSYqcWtGENYgLbXuQ">12. 7JJqUr</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/7JJjHAzd9HyYEHBESxjmYXRRPVJR263S6bHpx5qUrM7U">13. 7JJjHA</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/6zGHan1KsXofSF2GAwr3AAmxcQB5Q1uoXmvyj9E2TbGh">14. 6zGHan</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/4Ta1a1uDg3zY8h5YtgyCjPFdWajUsqBNzLTaLKMfoEar">15. 4Ta1a1</a> </div>
                        <div>0.00%</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center"><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/3cGsMdGULPNhFAw1PLW6dH2H3UWYKvfhA73JQbKZ3szU">16. 3cGsMd</a> </div>
                        <div>0.00%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 