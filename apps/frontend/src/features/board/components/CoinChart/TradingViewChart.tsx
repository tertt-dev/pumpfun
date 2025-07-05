'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface TradingViewChartProps {
  symbol: string;
  containerId: string;
}

export const TradingViewChart = ({ symbol, containerId }: TradingViewChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          symbol: `${symbol}/SOL Market Cap (USD)`,
          interval: '1',
          container_id: containerId,
          width: '100%',
          height: '100%',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: true,
          save_image: false,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          gridColor: 'rgba(42, 46, 57, 0)',
          widgetbar: {
            details: false,
            watchlist: false,
            news: false,
            datawindow: false,
            watchlist_settings: {
              default_symbols: []
            }
          },
          time_frames: [
            { text: "1d", resolution: "15", description: "1 Day", title: "1D" },
            { text: "5d", resolution: "60", description: "5 Days", title: "5D" },
            { text: "1m", resolution: "720", description: "1 Month", title: "1M" }
          ],
          client_id: 'pump.fun',
          user_id: 'public',
          charts_storage_url: 'https://saveload.tradingview.com',
          charts_storage_api_version: '1.1',
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [symbol, containerId]);

  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="mb-5 w-full"></div>
      <div style={{ height: '600px', width: '100%' }}>
        <div className="flex h-full w-full flex-col">
          <div className="relative flex-grow">
            <div 
              ref={containerRef}
              id={containerId}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1000px]"></div>
    </div>
  );
}; 