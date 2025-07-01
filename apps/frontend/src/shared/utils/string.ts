import { TRUNCATE } from '../constants/layout';

export function truncateAddress(
  address: string,
  length: number = TRUNCATE.ADDRESS_LENGTH,
  position: 'start' | 'end' = 'end',
  withEllipsis: boolean = true
): string {
  if (!address || address.length <= length) return address;
  
  if (position === 'start') {
    return `${withEllipsis ? '...' : ''}${address.slice(address.length - length)}`;
  }
  
  return `${address.slice(0, length)}${withEllipsis ? '...' : ''}`;
}

export function formatMarketCap(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0';
  
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  
  return num.toString();
} 