export interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  marketCap: string;
  replies: number;
  image: string;
  description: string;
  isLive: boolean;
}

export interface Trade {
  tokenAddress: string;
  tokenCreatorPicture: string;
  ticker: string;
  wallet: string;
  transationType: 'buy' | 'sell';
}

export interface TokenCreation {
  tokenAddress: string;
  tokenCreatorPicture: string;
  tokenCreatorName: string;
  ticker: string;
  tokenPicture: string;
} 