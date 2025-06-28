"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet } from "@/components/ui/sheet"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import styles from "@/styles/components/topbar.module.css"

// Utility function for truncating addresses
const truncate = (str: string, n: number, position: "start" | "end" = "end", withEllipsis: boolean = true) => {
    if (str.length <= n) return str;
    if (position === "start") {
        return `${withEllipsis ? '...' : ''}${str.slice(str.length - n)}`;
    }
    return `${str.slice(0, n)}${withEllipsis ? '...' : ''}`;
};

const LastTradesMock = [
    {
       tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
       wallet: "0x1234567890123456789012345678901234567890",
       tokenAddress: "BcVUmXpCsf912d23d3ZzneY8a19TjUtVwLNU6114CeR7yLpump",
       transationType: "sell",
       solAmount: 9000,
       ticker: "MEME",
       tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
       tradeMarketcap: 5600
    }, 
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmXpCsfqwevwev91ZzneY8a19TjUtVwLNU6114CeR7yLpump",
        transationType: "buy",
        solAmount: 1000,
        ticker: "ETH",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tradeMarketcap: 5700
    }, 
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmXpCsf91ZsvqwevzneY8a19TjUtVwLNU6114CeR7yLpump",
        transationType: "buy",
        solAmount: 100,
        ticker: "SOL",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tradeMarketcap: 2500
    }, 
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmX23fvvpCsf91ZzneY8a19TjUtVwLNU6114CeR7yLpump",
        transationType: "sell",
        solAmount: 200,
        ticker: "BTC",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tradeMarketcap: 1500
    }
]

const LastTokenCreatedMock = [
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tokenCreatorName: "John Doe",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmXpCsf923e2f3f1ZzneY8a19TjUtVwLNU6114CeR7yLpump",
        ticker: "MEME",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579"
    },
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tokenCreatorName: "Anonymous",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmXpCwe23sf91ZzneY8a19TjUtVwLNU6114CeR7yLpump",
        ticker: "Momo",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579"
    },
    {
        tokenCreatorPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579",
        tokenCreatorName: "Mala",
        wallet: "0x1234567890123456789012345678901234567890",
        tokenAddress: "BcVUmXpCsfwewef91ZzneY8a19TjUtVwLNU6114CeR7yLpump",
        ticker: "Bibi",
        tokenPicture: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1747033579"
    }
]

export function UpdateBar() {
    const [loading, setLoading] = useState(true);
    const [showCreateButton, setShowCreateButton] = useState(false);
    const [tradeShakeKey, setTradeShakeKey] = useState(0);
    const [tokenShakeKey, setTokenShakeKey] = useState(0);

    const getRandomItem = (array: any[]) => {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    const [latestTrade, setLatestTrade] = useState(LastTradesMock[0]);
    const [latestTokenCreated, setLatestTokenCreated] = useState(LastTokenCreatedMock[0]);

    useEffect(() => {
        setLoading(false);
        
        const tradeInterval = setInterval(() => {
            setLatestTrade(getRandomItem(LastTradesMock));
            setTradeShakeKey(prev => prev + 1);
        }, 3000);

        // Offset token creation updates by 1.5 seconds
        const tokenInterval = setTimeout(() => {
            const interval = setInterval(() => {
                setLatestTokenCreated(getRandomItem(LastTokenCreatedMock));
                setTokenShakeKey(prev => prev + 1);
            }, 3000);
            return () => clearInterval(interval);
        }, 1500);
        
        return () => {
            clearInterval(tradeInterval);
            clearTimeout(tokenInterval);
        };
    }, []);

    return (
        <div className="z-11 relative flex flex-col justify-between md:px-6 lg:flex-row">
            <div className="flex gap-3 overflow-hidden pb-2 sm:pt-2">
                <div className="w-full lg:w-auto">
                    <Link
                        key={`trades-${latestTrade.tokenAddress}-${tradeShakeKey}`}
                        href={`/coin/${latestTrade.tokenAddress}`}
                        className={cn(
                            "group flex items-center gap-1 px-2 py-1.5 text-sm text-primary-foreground transition-colors sm:rounded animate-shake",
                            latestTrade.transationType === "sell" ? "bg-red-300" : "bg-green-300"
                        )}
                    >
                        <div className="inline-flex gap-1">
                            <span className="inline-flex items-center gap-1 truncate">
                                <img 
                                    src={latestTrade.tokenCreatorPicture} 
                                    alt={latestTrade.ticker}
                                    className="h-4 w-4 rounded-full"
                                    width={16}
                                    height={16}
                                />
                                <span>{truncate(latestTrade.wallet, 6)}</span>
                            </span>
                            <span className="truncate">
                                {latestTrade.transationType === "sell" ? "sold" : "bought"} {latestTrade.solAmount} SOL of{" "}
                                <span className="inline-flex gap-1 group-hover:underline">
                                    {latestTrade.ticker}
                                    <img 
                                        src={latestTrade.tokenPicture} 
                                        alt={latestTrade.ticker}
                                        className="h-5 w-5 rounded-full"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </span>
                        </div>
                        <div className="inline-flex gap-2">
                            <div className="hidden gap-1 xl:inline-flex">
                                <span>|</span>
                                <span>mcap: ${(latestTrade.tradeMarketcap / 1000).toFixed(1)}K</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <Link
                        key={`token-${latestTokenCreated.tokenAddress}-${tokenShakeKey}`}
                        href={`/coin/${latestTokenCreated.tokenAddress}`}
                        className="group flex items-center gap-2 rounded bg-blue-300 px-2 py-1.5 text-sm text-primary-foreground animate-shake"
                    >
                        <div className="inline-flex gap-1">
                            <span className="inline-flex items-center gap-1 truncate">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full h-4 w-4">
                                    <img 
                                        src={latestTokenCreated.tokenCreatorPicture} 
                                        alt="anon"
                                        className="aspect-square h-full w-full"
                                    />
                                </span>
                                <span>{truncate(latestTokenCreated.tokenCreatorName, 6)} </span>
                            </span>
                            <span className="truncate">
                                created{" "}
                                <span className="inline-flex gap-1 group-hover:underline">
                                    {latestTokenCreated.ticker}
                                    <img 
                                        src={latestTokenCreated.tokenPicture} 
                                        alt={latestTokenCreated.ticker}
                                        className="h-5 w-5 rounded-full"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between gap-3 px-4 py-2 md:px-0" style={{ zIndex: 52 }}>
                <div className="flex lg:hidden">
                    <Link className="flex items-center md:hidden" href="/board">
                        <Image
                            src="/logo.png"
                            alt="Pump"
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
                <div className="flex gap-3">
                    <Link
                        href="/create"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md px-3 h-8"
                        data-testid="create-coin-button"
                    >
                        create coin
                    </Link>
                    <button
                        className="h-8 w-20 rounded bg-green-300 px-3 py-1 text-sm font-semibold text-black hover:bg-green-500"
                        type="button"
                    >
                        log in
                    </button>
                </div>
            </div>
        </div>
    );
}
