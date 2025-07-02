'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebarState } from '@/hooks/use-sidebar-state';
import { FilterState, FILTER_TAGS, SortOption } from '../types/filters';
import { TagCarousel } from './TagCarousel';

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
}

export function FilterSection({ onFilterChange }: FilterSectionProps) {
  const { width: sidebarWidth } = useSidebarState();
  const [filters, setFilters] = useState<FilterState>({
    sort: 'featured',
    showAnimations: true,
    includeNsfw: false,
    selectedTags: []
  });

  const handleFilterChange = (updates: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updates };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTagSelect = (tagId: string) => {
    const selectedTags = filters.selectedTags.includes(tagId)
      ? filters.selectedTags.filter(id => id !== tagId)
      : [...filters.selectedTags, tagId];
    
    handleFilterChange({ selectedTags });
  };

  return (
    <div 
      className="w-full overflow-hidden"
      style={{ 
        maxWidth: `calc(100vw - ${sidebarWidth}px - 48px)`,
        margin: '0 24px'
      }}
    >
      <div className="flex max-w-full flex-col justify-start overflow-hidden md:flex-row md:items-center md:gap-2">
        <div className="sticky left-0 top-0 grid gap-2 bg-background py-2 pb-4 pr-2 md:static md:pb-2 z-10">
          <div className="grid w-full items-center sm:flex gap-4">
            <div className="flex gap-4">
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:R2m5puti9uacqkq:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1 min-w-max border-none bg-green-300 text-black focus:border-none active:border-none"
                aria-label="Sort"
              >
                <span style={{ pointerEvents: 'none' }}>
                  sort: {filters.sort} {filters.sort === 'featured' && '🔥'}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm md:grid md:gap-1">
              <div className="flex h-fit items-center gap-1 text-white">
                <div>show animations:</div>
                <div className="flex w-[72px] gap-1">
                  <div
                    onClick={() => handleFilterChange({ showAnimations: true })}
                    className={cn(
                      "cursor-pointer rounded px-1",
                      filters.showAnimations ? "bg-green-300 text-black" : "text-gray-500 hover:bg-gray-800"
                    )}
                  >
                    on
                  </div>
                  <div
                    onClick={() => handleFilterChange({ showAnimations: false })}
                    className={cn(
                      "cursor-pointer rounded px-1",
                      !filters.showAnimations ? "bg-green-300 text-black" : "text-gray-500 hover:bg-gray-800"
                    )}
                  >
                    off
                  </div>
                </div>
              </div>

              <div className="flex h-fit items-center gap-1 text-white">
                <div>include nsfw:</div>
                <div className="flex w-[72px] gap-1">
                  <div
                    onClick={() => handleFilterChange({ includeNsfw: true })}
                    className={cn(
                      "cursor-pointer rounded px-1",
                      filters.includeNsfw ? "bg-green-300 text-black" : "text-gray-500 hover:bg-gray-800"
                    )}
                  >
                    on
                  </div>
                  <div
                    onClick={() => handleFilterChange({ includeNsfw: false })}
                    className={cn(
                      "cursor-pointer rounded px-1",
                      !filters.includeNsfw ? "bg-green-300 text-black" : "text-gray-500 hover:bg-gray-800"
                    )}
                  >
                    off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[72px] flex-1 overflow-hidden">
          <TagCarousel
            tags={FILTER_TAGS}
            selectedTags={filters.selectedTags}
            onTagSelect={handleTagSelect}
          />
        </div>
      </div>
    </div>
  );
} 