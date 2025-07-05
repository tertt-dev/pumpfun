import React, { useRef } from 'react';

const similarCoins = [
  {
    id: '25o23WNZVsar4ZUwYGT9nD2U2eJFwLw44qbair6Upump',
    name: 'POOOP',
    symbol: 'POOOP',
    marketCap: '4.1K',
    replies: 8,
    created: '7d ago',
    image: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
  },
  {
    id: '2B6JyKFSytHEBNGHmXcxKe5VLHMdsQks1BbVbq3Tpump',
    name: 'POOP COIN',
    symbol: 'POOPCOIN',
    marketCap: '4.1K',
    replies: 2,
    created: '1mo ago',
    image: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
  },
  {
    id: '2CjAJKGENsEwNNRDedaLKPdyxk64FRGbtPzDN8s1pump',
    name: 'POOPCOIN',
    symbol: 'POOPCOIN',
    marketCap: '4.1K',
    replies: 79,
    created: '2mo ago',
    image: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
  },
];

export const SimilarCoinsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="carousel-container" style={{ maxWidth: 'calc(-630px + 100vw)' }}>
      <section className="relative mb-6 w-full">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-white">similar coins</h2>
          <div className="flex space-x-2">
            <button className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75" aria-label="scroll left" onClick={() => scroll('left')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-white" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button className="cursor-pointer rounded-full bg-gray-800 bg-opacity-50 p-2 transition hover:bg-opacity-75" aria-label="scroll right" onClick={() => scroll('right')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-white" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden px-0">
          <div className="touch-pan-x touch-pan-y overflow-hidden pl-0">
            <div
              ref={scrollRef}
              className="ml-0 flex pl-0 hide-scrollbar"
              style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
            >
              {similarCoins.map((coin) => (
                <div key={coin.id} className="coin-item flex-shrink-0" style={{ marginRight: 12 }}>
                  <div className="relative overflow-visible pt-2" style={{ height: 'auto' }}>
                    <a className="carousel-card relative flex flex-shrink-0 flex-row overflow-hidden rounded-xl bg-[#1F2937] bg-opacity-90 p-3 text-slate-300 transition-colors duration-300 ease-in-out hover:bg-[#2F3741] hover:shadow-xl" draggable="false" href={`/coin/${coin.id}`} style={{ width: '70vw', maxWidth: 360 }}>
                      <div className="relative mr-3 flex-shrink-0" style={{ width: 76, height: 76 }}>
                        <img alt={coin.name} draggable="false" loading="lazy" width={76} height={76} decoding="async" className="aspect-square h-full w-full rounded-md object-cover" src={coin.image} style={{ color: 'transparent' }} />
                      </div>
                      <div className="flex h-full flex-1 flex-col gap-1 truncate text-[12px] leading-[16px]">
                        <div className="flex flex-col gap-1">
                          <span className="font-bold">{coin.name}({coin.symbol})</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center text-green-300"><span className="font-medium">market cap: $</span>{coin.marketCap}</div>
                          <div className="flex items-center"><span>replies: {coin.replies}</span></div>
                        </div>
                        <div className="mt-auto flex items-center gap-1"><span>created:</span><span>{coin.created}</span></div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

<style jsx global>{`
  .hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}</style> 