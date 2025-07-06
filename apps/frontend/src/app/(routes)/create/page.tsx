'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { 
  Link as LinkIcon, 
  ChevronDown, 
  Images, 
  File, 
  Image as ImageIcon,
  Coins 
} from 'lucide-react';

export default function CreatePage() {
  const [coinName, setCoinName] = useState('');
  const [ticker, setTicker] = useState('');
  const [description, setDescription] = useState('');

  return (
    <main className="relative px-4 md:px-0">
      <div className="my-4 flex w-full flex-wrap justify-center gap-16 px-6">
        <div className="flex w-full max-w-2xl flex-col gap-4 text-start">
          <h5 className="font-bold leading-5 text-[#F8FAFC]">create new coin</h5>
          
          <span className="flex flex-col gap-1">
            <h5 className="text-sm font-bold text-[#F8FAFC]">coin details</h5>
            <p className="text-xs text-[#9da3ae]">choose carefully, these can't be changed once the coin is created</p>
          </span>

          <div className="flex w-full flex-col gap-4 rounded-xl border border-[#1c2530] bg-[#191b23] px-4 py-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col gap-2">
                <label className="text-xs font-semibold text-[#F8FAFC]" htmlFor="name">coin name</label>
                <Input
                  id="name"
                  placeholder="name your coin"
                  value={coinName}
                  onChange={(e) => setCoinName(e.target.value)}
                  className="w-full rounded-lg border border-[#374151] bg-transparent p-2 text-sm text-white"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label className="text-xs font-semibold text-[#F8FAFC]" htmlFor="ticker">ticker</label>
                <Input
                  id="ticker"
                  placeholder="add a coin ticker (e.g. DOGE)"
                  maxLength={10}
                  value={ticker}
                  onChange={(e) => setTicker(e.target.value)}
                  className="w-full rounded-lg border border-[#374151] bg-transparent p-2 text-sm text-white"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="text-xs font-semibold text-[#f8fafc]">
                description <span className="text-[#9da3ae]">(optional)</span>
              </label>
              <textarea
                className="h-24 w-full rounded-lg border border-[#374151] bg-transparent p-2 text-sm text-white"
                placeholder="write a short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-2 text-[#f8f1fc] [&>#chevron]:transition-transform [&>#chevron]:duration-200 [&>#chevron]:data-[state=open]:rotate-180">
                <LinkIcon size={18} />
                <p className="text-xs">
                  add social links <span className="text-[#9da3ae]">(optional)</span>
                </p>
                <ChevronDown size={16} id="chevron" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 flex flex-col gap-4" />
            </Collapsible>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-xl border border-[#1c2530] bg-[#191b23] p-4">
            <div className="flex w-full flex-col gap-4">
              <div
                role="presentation"
                tabIndex={0}
                className="relative flex h-80 min-h-44 w-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-white/30 bg-transparent transition-colors duration-200"
              >
                <input
                  accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/gif,.gif,image/webp,.webp,video/*,.mp4,.webm"
                  multiple
                  tabIndex={-1}
                  type="file"
                  className="sr-only"
                />
                <Images size={48} className="text-[#9da3ae] transition-colors duration-200" />
                <span className="text-center">
                  <p className="font-semibold leading-5 text-[#f8fafc]">select video or image to upload</p>
                  <p className="leading-5 text-[#9da3ae]">or drag and drop it here</p>
                </span>
                <Button>log in</Button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex w-full flex-col gap-3 px-3 py-2 text-[#9da3ae] sm:w-1/2">
                  <File size={24} />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-[#F8FAFC]">file size and type</p>
                    <ul className="list-disc pl-3 text-xs">
                      <li>image - max 15mb. ".jpg", ".gif" or ".png" recommended</li>
                      <li>video - max 30mb. ".mp4" recommended</li>
                    </ul>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-4 px-3 py-2 text-[#9da3ae] sm:w-1/2">
                  <ImageIcon size={24} />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-[#F8FAFC]">resolution and aspect ratio</p>
                    <ul className="list-disc pl-3 text-xs">
                      <li>image - min. 1000x1000px, 1:1 square recommended</li>
                      <li>video - 16:9 or 9:16, 1080p+ recommended</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-2 text-[#f8f1fc] [&>#chevron]:transition-transform [&>#chevron]:duration-200 [&>#chevron]:data-[state=open]:rotate-180">
                <ImageIcon size={18} />
                <p className="text-xs">
                  add banner <span className="text-[#9da3ae]">(optional)</span>
                </p>
                <ChevronDown size={16} id="chevron" />
              </CollapsibleTrigger>
              <CollapsibleContent />
            </Collapsible>
          </div>

          <div className="flex w-full flex-row gap-2 rounded-xl border border-[#1c2530] bg-[#191b23] p-4 text-xs text-[#9da3ae]">
            <Coins size={20} />
            <span className="content-center">
              coin data (social links, banner, etc) can only be added now, and can't be changed or edited after creation
            </span>
          </div>

          <Button className="w-56" disabled>
            login to create coin
          </Button>
        </div>

        <div className="flex flex-col gap-4 text-start">
          <h5 className="font-bold leading-5 text-[#F8FAFC]">preview</h5>
          <div className="sticky top-0 flex w-56 flex-col items-center justify-center gap-4 rounded-xl border border-[#1c2530] bg-[#191b23] p-4">
            <div className="flex h-64 items-center justify-center">
              <span className="text-center text-sm text-[#9da3ae]">
                a preview of how the coin will look like
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
