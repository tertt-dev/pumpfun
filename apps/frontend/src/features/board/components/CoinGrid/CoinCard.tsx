import Image from 'next/image';
import Link from 'next/link';
import { Coin } from '../../types/coin';

interface CoinCardProps {
  coin: Coin;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <div id={coin.id}>
      <div className="group relative">
        <Link href={`/coin/${coin.id}`}>
          <div className="flex h-fit w-full overflow-hidden border p-2 group-hover:border-white border-transparent max-h-[300px] gap-2">
            <div className="aspect-video relative min-w-32 self-start">
              <Image
                alt={coin.name}
                width={128}
                height={128}
                className="mr-4 h-auto w-32"
                src={coin.imageUrl}
              />
            </div>
            <div className="grid h-fit gap-1">
              <div className="flex flex-wrap items-center gap-1 text-xs text-blue-200">
                <div className="flex items-center gap-1">
                  <div className="lg:hidden lgplus:block">created by</div>
                  <div className="hidden lg:block lgplus:hidden">creator</div>
                  <button type="button">
                    <span className="flex items-center">
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 rounded"
                        src={coin.creator.avatarUrl}
                      />
                      <span className="flex gap-1 rounded px-1 hover:underline" style={{ backgroundColor: 'transparent' }}>
                        {coin.creator.name}
                      </span>
                    </span>
                  </button>
                </div>
                <span className="w-full xl:w-auto">{coin.createdAt}</span>
              </div>
              <div className="flex gap-1 text-xs text-green-300">market cap: ${coin.marketCap}</div>
              <p className="flex items-center gap-2 text-xs">replies: {coin.replies}</p>
              <p className="break-anywhere w-full break-words text-sm">
                <span className="font-bold">{coin.name} ({coin.symbol}):</span> {coin.description}
              </p>
            </div>
          </div>
        </Link>
        <div className="absolute right-0 top-0 flex cursor-pointer flex-row items-center gap-1 p-2">
          <div className="flex flex-shrink-0 cursor-pointer group-hover:flex md:hidden">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white">
              <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex group-hover:flex md:hidden">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:stroke-green-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
          </div>
          <div style={{ height: '19px' }}>
            <div style={{ position: 'absolute', top: '20px', right: '0px', height: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}; 