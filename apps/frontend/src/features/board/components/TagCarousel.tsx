'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Tag {
  id: string;
  label: string;
}

interface TagCarouselProps {
  tags: Tag[];
  selectedTags: string[];
  onTagSelect: (tagId: string) => void;
}

export function TagCarousel({ tags, selectedTags, onTagSelect }: TagCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const canScrollLeft = () => {
    const container = scrollContainerRef.current;
    return container ? container.scrollLeft > 0 : false;
  };

  const canScrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return false;
    return container.scrollLeft < (container.scrollWidth - container.clientWidth);
  };

  return (
    <div className="relative flex items-center gap-2 bg-background bg-black-1 px-2 py-1">
      <div 
        className={`transform rounded-full bg-gray-800 bg-opacity-60 p-2 transition-all duration-200 ${
          canScrollLeft() ? 'cursor-pointer hover:bg-opacity-80' : 'cursor-not-allowed opacity-50'
        }`}
        onClick={() => canScrollLeft() && handleScroll('left')}
      >
        <ChevronLeft className="h-5 w-5 text-white transition-transform" />
      </div>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hidden flex-1 overflow-x-auto"
        style={{ marginLeft: '20px', marginRight: '20px' }}
      >
        <div className="flex w-fit touch-pan-x space-x-2">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onTagSelect(tag.id)}
              className="flex h-10 items-center justify-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-[14px] transition-colors text-[#F8FAFC] [background:#1F2937] hover:[background:#374151]"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      <div 
        className={`transform rounded-full bg-gray-800 bg-opacity-60 p-2 transition-all duration-200 ${
          canScrollRight() ? 'cursor-pointer opacity-70 hover:bg-opacity-80 hover:opacity-90' : 'cursor-not-allowed opacity-50'
        }`}
        onClick={() => canScrollRight() && handleScroll('right')}
      >
        <ChevronRight className="h-5 w-5 text-white transition-transform hover:scale-110" />
      </div>

      <style jsx global>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 