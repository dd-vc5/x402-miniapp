'use client';

import { DataCard } from '@/components/DataCard';
import { Page } from '@/components/PageLayout';
import { mockDataItems, mockUser, type Category } from '@/data/mockData';
import { Plus } from 'iconoir-react';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Home page following Mini App design guidelines:
 * - Default padding: 24px (px-6)
 * - Space between header and content: 16px (main pages)
 * - Space between sections: 32px
 * - Space between search/categories and content: 24px
 * - Space between last item and bottom bar: 32px
 */
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Category>('all');
  const categories: Category[] = ['sports', 'read', 'finance', 'crypto', 'business', 'tech', 'ai', 'travel'];

  const filteredItems = selectedCategory === 'all' 
    ? mockDataItems 
    : mockDataItems.filter(item => item.category === selectedCategory);

  return (
    <Page>
      <Page.Main className="pb-8 max-w-md mx-auto">
        {/* Header Section - 24px padding, 16px space to content */}
        <div className="px-6 pt-6">
          <h1 className="text-[34px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1 leading-tight">
            Discover
          </h1>
          <p className="text-[17px] text-[#86868b] dark:text-[#98989d]">
            Welcome back, {mockUser.username}
          </p>
        </div>

        {/* Categories Section - 24px space from header, 24px space to content below */}
        <div className="px-6 mt-4 mb-6">
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#007aff] dark:bg-[#0a84ff] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1c1c1e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-[#38383a]'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as Category)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-[15px] font-medium capitalize transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#007aff] dark:bg-[#0a84ff] text-white shadow-sm'
                    : 'bg-white dark:bg-[#1c1c1e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-[#38383a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - 32px space from last item to bottom bar */}
        <div className="px-6 space-y-5 pb-8">
          {filteredItems.map((item) => (
            <DataCard key={item.id} item={item} />
          ))}
        </div>
      </Page.Main>

      {/* Floating Create Button - 24px from bottom bar (iOS safe area) */}
      <Link
        href="/home/create"
        className="fixed bottom-28 right-6 z-50 w-14 h-14 bg-[#007aff] dark:bg-[#0a84ff] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0051d5] dark:hover:bg-[#409cff] transition-all active:scale-95"
      >
        <Plus className="w-6 h-6 text-white" />
      </Link>
    </Page>
  );
}
