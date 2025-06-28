'use client';

import { useSidebarState } from '@/hooks/use-sidebar-state';

export default function Home() {
  const { width: sidebarWidth, isCollapsed } = useSidebarState();
  const trendingCoins = [
    {
      id: "7Qs5wnmnTLmBdVRZKPBYVkdefABRa4KLwWwHZanbpump",
      name: "PEPE SOLANA",
      symbol: "PEPS",
      marketCap: "2.8M",
      replies: 342,
      image: "https://pump.mypinata.cloud/ipfs/bafkreicn7doi6zrxzy6gslagd5n67worlvjwrfrfxw3ipobobltslydonq",
      description: "Pepe Takes Over Solana as Meme Season Continues",
      isLive: false
    },
    {
      id: "CB9dDufT3ZuQXqqSfa1c5kY935TEreyBw9XJXxHKpump",
      name: "Solana Cats",
      symbol: "SCAT",
      marketCap: "1.5M",
      replies: 156,
      image: "https://pump.mypinata.cloud/ipfs/QmQw4DQjdWp3G8TuMCykG8SVSwtFwkxvTyxEWNMuAVYU4q",
      description: "Cat Memes Find New Home on Solana Blockchain",
      isLive: true
    },
    {
      id: "8NCievmJCg2d9Vc2TWgz2HkE6ANeSX7kwvdq5AL7pump",
      name: "Moon Soon",
      symbol: "MOON",
      marketCap: "3.2M",
      replies: 421,
      image: "https://pump.mypinata.cloud/ipfs/QmcEUWz7Sfr2ytpTbg5QgYJ7LnsgkYfG3kzfUacRE4NFL7",
      description: "Community-Driven Token Promises Lunar Landing",
      isLive: false
    },
    {
      id: "2RA1v8NdkEQcF5N5zHUqLuAHxjnDMQFjwEE8fwKNpump",
      name: "Degen Life",
      symbol: "DGEN",
      marketCap: "890K",
      replies: 234,
      image: "https://pump.mypinata.cloud/ipfs/bafkreifrjbzj52q6f6wy7tj6rxisam5t3jeibbapfpd526bevdqpgnb4zm",
      description: "Embracing the Degen Lifestyle with New Token Launch",
      isLive: false
    },
    {
      id: "GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump",
      name: "Solana Frens",
      symbol: "FRENS",
      marketCap: "4.1M",
      replies: 567,
      image: "https://pump.mypinata.cloud/ipfs/QmU5D2LBjkriYD4wqL5cEVwv1x1xqj2LCQAPKC79cVGd34",
      description: "Building Friendships on the Blockchain",
      isLive: true
    },
    {
      id: "3oQwNvAfZMuPWjVPC12ukY7RPA9JiGwLod6Pr4Lkpump",
      name: "Meme Lords",
      symbol: "LORD",
      marketCap: "1.8M",
      replies: 289,
      image: "https://pump.mypinata.cloud/ipfs/bafybeic4b5sqghlzsfjg7tbywaepjes6ducb3birrbznya2up5jbku2u7i",
      description: "The Ultimate Meme Governance Token",
      isLive: false
    },
    {
      id: "tdzUKGeAchLRzpYBzmBWEGaoP7E8EQ8hPv8Eqi8pump",
      name: "Sol Punks",
      symbol: "PUNK",
      marketCap: "2.5M",
      replies: 345,
      image: "https://pump.mypinata.cloud/ipfs/bafkreigjpu5oc7ipkandvhmv2c3mdmylo26v4spaovkynnmku2a4ca7gii",
      description: "Bringing Punk Culture to Solana",
      isLive: false
    },
    {
      id: "5c74v6Px9RKwdGWCfqLGfEk7UZfE3Y4qJbuYrLbVG63V",
      name: "Bonk Friends",
      symbol: "BFRENS",
      marketCap: "1.2M",
      replies: 178,
      image: "https://pump.mypinata.cloud/ipfs/Qmc4ieJEoSvAMbdN1nCFvxDqoMyXNgaJocYCYQnavztHLc",
      description: "The Friendly Side of Bonk Ecosystem",
      isLive: true
    },
    {
      id: "BbbwE8rudhjK4husSRc37X54mYyDBRcykJ7fk5oHpump",
      name: "Meme Masters",
      symbol: "MASTER",
      marketCap: "3.5M",
      replies: 432,
      image: "https://pump.mypinata.cloud/ipfs/bafybeibb32glxzhjol2qx6mjcthowsn42ifpxowr5rkgyxfoh7c4ocj4ja",
      description: "The Ultimate Platform for Meme Creation and Trading",
      isLive: true
    }
  ];

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-8">
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50 hover:underline"
        href="/create"
      >
        [start a new coin]
      </a>
      <div className="flex w-full md:justify-center">
        <form 
          className="w-full md:max-w-md grid grid-cols-[1fr_auto_auto] gap-2 relative z-[51]"
        >
          <div className="relative w-full">
            <input
              className="flex h-10 rounded-md ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 w-full border border-none border-gray-300 bg-green-300 p-2 text-[1rem] text-black focus:border-none active:border-none"
              id="search-token"
              placeholder="search for token"
              autoComplete="off"
              aria-label="Search for token"
              enterKeyHint="search"
              type="search"
              name="search-token"
            />
          </div>
          <button 
            className="flex w-20 items-center justify-center rounded bg-green-300 p-2 text-black hover:bg-green-500" 
            type="submit"
          >
            search
          </button>
        </form>
      </div>
      <div className="w-full max-w-full overflow-hidden">
        <section className="relative mb-6">
          <div className="mb-2 flex items-center justify-between px-6">
            <h2 className="text-[16px] font-semibold text-white">now trending</h2>
            <div className="flex space-x-2">
              <button className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75" aria-label="scroll left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-white" aria-hidden="true">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75" aria-label="scroll right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-white" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
            <div 
              id="carousel-container" 
              className="flex w-full gap-3 overflow-x-auto pb-4 px-6 hide-scrollbar"
              style={{ 
                width: '100%',
                maxWidth: `calc(100vw - ${sidebarWidth}px - 2px)`
              }}
            >
              {trendingCoins.map((coin, index) => (
                <div 
                  key={coin.id} 
                  className="coin-item min-w-[280px] max-w-[280px]"
                >
                  <div className="relative overflow-visible">
                    <a draggable="false" className="block w-full" href={`/coin/${coin.id}`}>
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
                                <span className="font-medium text-green-300">market cap: $</span>{coin.marketCap}
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
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}