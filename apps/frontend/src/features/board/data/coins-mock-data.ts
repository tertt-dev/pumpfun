import { Coin } from '../types/coin';

const creators = [
  { name: 'EYdTXk', avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1' },
  { name: 'FTogJs', avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1' },
  { name: 'D2CPHo', avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1' },
];

const mockImages = [
  'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
  'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
  'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=128&img-dpr=2&img-onerror=redirect',
];

export const MOCK_COINS: Coin[] = Array.from({ length: 48 }, (_, i) => ({
  id: `coin-${i}-pump`,
  name: `Coin ${i + 1}`,
  symbol: `COIN${i + 1}`,
  description: `This is a description for Coin ${i + 1}`,
  imageUrl: mockImages[i % mockImages.length],
  marketCap: `${((i + 1) * 2.5).toFixed(1)}K`,
  replies: i % 20,
  createdAt: `${i % 7}d ago`,
  creator: creators[i % creators.length],
})); 