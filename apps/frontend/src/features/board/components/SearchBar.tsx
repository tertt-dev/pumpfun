'use client';

import { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <div className="flex w-full md:justify-center">
      <form 
        className="w-full md:max-w-md" 
        style={{
          display: 'grid', 
          gridTemplateColumns: '1fr auto auto', 
          gap: '0.5rem', 
          position: 'relative', 
          zIndex: 51
        }}
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input 
            type="search" 
            className="flex h-10 rounded-md ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 w-full border border-none border-gray-300 bg-green-300 p-2 text-[1rem] text-black focus:border-none active:border-none" 
            id="search-token" 
            placeholder="search for token" 
            autoComplete="off" 
            aria-label="Search for token" 
            enterKeyHint="search" 
            name="search-token"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
  );
} 