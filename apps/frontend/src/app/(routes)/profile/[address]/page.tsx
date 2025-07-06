'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProfileData {
  address: string;
  username: string;
  avatarUrl: string;
  followers: number;
  following: number;
  createdCoins: number;
}

export default function ProfilePage({ params }: { params: { address: string } }) {
  const [activeTab, setActiveTab] = useState<'balances' | 'replies' | 'notifications' | 'following'>('balances');
  const [profileData, setProfileData] = useState<ProfileData>({
    address: params.address,
    username: params.address.slice(0, 6),
    avatarUrl: `https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=93&img-dpr=2&img-onerror=redirect`,
    followers: 0,
    following: 1,
    createdCoins: 0
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(profileData.address);
  };

  const tabs = [
    { id: 'balances', label: 'balances' },
    { id: 'replies', label: 'replies' },
    { id: 'notifications', label: 'notifications' },
    { id: 'following', label: 'following' }
  ] as const;

  const whoToFollow = [
    { username: 'sapijiju', followers: 8813, avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmVWWDEf7hwafxewNneUWpQiESyA7ehY1sK4YM6wMqxJUP?img-width=40&img-dpr=2&img-onerror=redirect' },
    { username: 'a1lon', followers: 8001, avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmaNAcN2r2ibZc5Anw3X84PTqtBA2MRoYpP3ZCrsNSzAHw?img-width=40&img-dpr=2&img-onerror=redirect' },
    { username: 'coinsfast', followers: 23506, avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmZbfDpvpmJA4Pa6EovAKHWEejf72Re8xP5VJJJvUqmQqN?img-width=40&img-dpr=2&img-onerror=redirect' },
    { username: 'GwTg7Q', followers: 22884, avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=40&img-dpr=2&img-onerror=redirect' },
    { username: '0xwinged', followers: 21989, avatarUrl: 'https://pump.mypinata.cloud/ipfs/QmUuSq7Caayq5Gkjfxw9G3giWGgs6npS2jCrdCkwikP1iH?img-width=40&img-dpr=2&img-onerror=redirect' }
  ];

  return (
    <div className="mx-auto mt-1 grid w-full max-w-6xl items-start gap-4 px-2 text-white">
      <Link href="/board" className="flex w-fit items-center gap-1 text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </Link>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[612px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img
                  alt=""
                  src={profileData.avatarUrl}
                  className="h-[93px] w-[93px] rounded-full border border-white/20 object-contain"
                  width={93}
                  height={93}
                />
                <div className="flex flex-col justify-center gap-1">
                  <div className="flex items-center gap-1">
                    <h1 className="text-xl font-medium">{profileData.username}</h1>
                  </div>
                  <div className="mt-1 flex flex-col items-center gap-2.5 sm:flex-row">
                    <div className="group flex cursor-pointer items-center gap-2 rounded bg-white/5 p-1 px-2" onClick={handleCopyAddress}>
                      <span className="w-fit justify-self-end text-xs text-gray-400 group-hover:underline">
                        <span className="max-w-[73px] cursor-pointer truncate text-xs text-gray-400">
                          {profileData.address.slice(0, 5)}...{profileData.address.slice(-4)}
                        </span>
                      </span>
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 group-hover:stroke-white" color="#9DA3AE">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </div>
                    <div className="group flex items-center gap-2">
                      <a
                        className="w-fit justify-self-end text-xs text-gray-400 hover:underline"
                        href={`https://solscan.io/account/${profileData.address}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view on solscan
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline-block h-3 w-3 group-hover:stroke-white">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" x2="21" y1="14" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="self-center">edit</Button>
            </div>

            <div className="flex gap-9">
              <div className="flex flex-col">
                <span className="text-center text-xl font-semibold">{profileData.followers}</span>
                <span className="text-xs text-gray-400">followers</span>
              </div>
              <div className="flex flex-col cursor-pointer">
                <span className="text-center text-xl font-semibold">{profileData.following}</span>
                <span className="text-xs text-gray-400">following</span>
              </div>
              <div className="flex flex-col">
                <span className="text-center text-xl font-semibold">{profileData.createdCoins}</span>
                <span className="text-xs text-gray-400">created coins</span>
              </div>
            </div>
          </div>

          <div className="flex h-fit items-center gap-2 border-b border-[#37414F] text-white md:gap-12">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer pb-4 pt-2 text-sm border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#86EFAC] font-semibold text-white'
                    : 'border-[rgba(0,0,0,0)] text-[#9DA3AE] hover:text-white'
                }`}
              >
                <div className="flex flex-row">{tab.label}</div>
              </div>
            ))}
          </div>

          <div className="justify-items-right grid w-full overflow-x-hidden">
            <div className="grid w-full">
              <div className="grid w-full justify-start gap-4 px-2 text-sm text-gray-500" style={{ gridTemplateColumns: 'auto minmax(0px, 40%) 1fr 1fr' }}>
                <div>coins</div>
                <div></div>
                <div className="text-right">mcap</div>
                <div className="text-right">value</div>
              </div>
              <div className="grid w-full gap-4 p-2 text-sm" style={{ gridTemplateColumns: 'auto minmax(0px, 40%) 1fr' }}>
                <Image
                  alt="SOL"
                  src="/solana-logo-square.png"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex min-w-0 flex-col">
                  <div className="truncate font-bold">Solana balance</div>
                  <div className="truncate text-gray-500">0.0000 SOL</div>
                </div>
                <div className="flex h-full items-center justify-center justify-self-end font-bold">$0</div>
              </div>
              <div className="h-10 w-full"></div>
            </div>
          </div>
        </div>

        <div className="hidden max-w-[360px] flex-col gap-4 lg:flex">
          <div className="max-w-[400px]">
            <h3 className="mb-3 text-sm font-semibold">who to follow</h3>
            {whoToFollow.map((user) => (
              <div key={user.username} className="mb-4 grid w-full min-w-[350px] gap-4 text-sm" style={{ gridTemplateColumns: 'auto auto 1fr' }}>
                <Link href={`/profile/${user.username}`}>
                  <img
                    alt={user.username}
                    src={user.avatarUrl}
                    className="h-10 w-10 rounded-full object-contain"
                    width={40}
                    height={40}
                  />
                </Link>
                <div className="flex flex-col justify-start">
                  <Link href={`/profile/${user.username}`}>
                    <div className="font-bold">{user.username}</div>
                  </Link>
                  <div className="text-gray-500">{user.followers} followers</div>
                </div>
                <div className="flex w-full items-center justify-end">
                  <button className="flex h-6 min-w-[60px] max-w-full items-center justify-center rounded bg-green-400 px-2 py-1 text-center text-xs font-bold text-black hover:bg-green-300">
                    follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 