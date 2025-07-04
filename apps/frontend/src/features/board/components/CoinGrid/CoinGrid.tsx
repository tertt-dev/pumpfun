import { Coin } from '../../types/coin';
import { CoinCard } from './CoinCard';

interface CoinGridProps {
  coins: Coin[];
}

export const CoinGrid = ({ coins }: CoinGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}; 