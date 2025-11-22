'use client';

import { DataCard } from '@/components/DataCard';
import { Page } from '@/components/PageLayout';
import { mockDataItems, mockUser } from '@/data/mockData';
import { Plus } from 'iconoir-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sports' | 'read'>('all');
  const categories = ['sports', 'read'];

  const filteredItems = selectedCategory === 'all' 
    ? mockDataItems 
    : mockDataItems.filter(item => item.category === selectedCategory);

  return (
    <Page>
      <Page.Main className="pb-24 max-w-md mx-auto">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            HI <span className="lowercase">{mockUser.username}</span>
          </h1>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm capitalize ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredItems.map((item) => (
            <DataCard key={item.id} item={item} />
          ))}
        </div>
      </Page.Main>

      {/* Floating Create Button */}
      <Link
        href="/home/create"
        className="fixed bottom-20 right-6 z-50 btn btn-circle btn-primary btn-lg shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </Link>
    </Page>
  );
}
