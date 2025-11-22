'use client';

import { mockDataItems } from '@/data/mockData';
import Link from 'next/link';
import { Star } from 'iconoir-react';

interface DataCardProps {
  item: typeof mockDataItems[0];
}

export const DataCard = ({ item }: DataCardProps) => {
  return (
    <Link href={`/home/data/${item.id}`}>
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        <div
          className="h-32 w-full"
          style={{ background: item.bgImage }}
        />
        <div className="card-body p-4">
          <h2 className="card-title text-lg">{item.title}</h2>
          <p className="text-sm text-base-content/70 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <span className="text-xs text-base-content/60">by</span>
              <span className="text-xs font-semibold">{item.seller}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="text-xs font-semibold">{item.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

