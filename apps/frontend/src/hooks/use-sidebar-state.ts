'use client';

import { useState, useEffect } from 'react';

const EXPANDED_WIDTH = 212.185;
const COLLAPSED_WIDTH = 70.8104;

interface SidebarState {
  width: number;
  isCollapsed: boolean;
}

export function useSidebarState(): SidebarState {
  const [state, setState] = useState<SidebarState>({
    width: EXPANDED_WIDTH,
    isCollapsed: false
  });

  useEffect(() => {
    const updateSidebarState = () => {
      const sidebarElement = document.querySelector('aside') as HTMLElement;
      if (sidebarElement) {
        const width = sidebarElement.getBoundingClientRect().width;
        const isCollapsed = Math.abs(width - COLLAPSED_WIDTH) < Math.abs(width - EXPANDED_WIDTH);
        
        if (Math.abs(width - state.width) > 1 || isCollapsed !== state.isCollapsed) {
          setState({
            width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
            isCollapsed
          });
        }
      }
    };

    updateSidebarState();

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(updateSidebarState);
    });
    
    const sidebarElement = document.querySelector('aside');
    if (sidebarElement) {
      resizeObserver.observe(sidebarElement);
    }

    // 
    window.addEventListener('resize', updateSidebarState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSidebarState);
    };
  }, [state.width, state.isCollapsed]);

  return state;
} 