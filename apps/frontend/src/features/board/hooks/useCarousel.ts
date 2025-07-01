import { useState, useRef, useCallback } from 'react';

interface CarouselState {
  scrollLeft: number;
  isAtStart: boolean;
  isAtEnd: boolean;
}

interface UseCarouselOptions {
  scrollAmount?: number;
  behavior?: ScrollBehavior;
}

export function useCarousel(options: UseCarouselOptions = {}) {
  const {
    scrollAmount = 280,
    behavior = 'smooth'
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CarouselState>({
    scrollLeft: 0,
    isAtStart: true,
    isAtEnd: false
  });

  const updateScrollState = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setState({
      scrollLeft,
      isAtStart: scrollLeft <= 0,
      isAtEnd: Math.ceil(scrollLeft + clientWidth) >= scrollWidth
    });
  }, []);

  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior
    });
  }, [scrollAmount, behavior]);

  const scrollLeft = useCallback(() => scrollTo('left'), [scrollTo]);
  const scrollRight = useCallback(() => scrollTo('right'), [scrollTo]);

  return {
    containerRef,
    state,
    scrollLeft,
    scrollRight,
    updateScrollState
  };
} 