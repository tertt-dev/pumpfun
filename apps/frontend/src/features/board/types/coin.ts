export interface Creator {
  name: string;
  avatarUrl: string;
}

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  marketCap: string;
  replies: number;
  createdAt: string;
  creator: Creator;
} 