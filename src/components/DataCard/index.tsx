'use client';

import { mockDataItems } from '@/data/mockData';
import Link from 'next/link';
import { Star } from 'iconoir-react';

interface DataCardProps {
  item: typeof mockDataItems[0];
}

export const DataCard = ({ item }: DataCardProps) => {
  return (
    <Link href={`/home/data/${item.id}`} className="block">
      <div className="app-store-card">
        {/* Image Section */}
        <div
          className="h-48 w-full relative overflow-hidden"
          style={{ 
            background: item.bgImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2 text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
            {item.title}
          </h2>
          <p className="text-[15px] text-[#86868b] dark:text-[#98989d] line-clamp-2 mb-4 leading-relaxed">
            {item.description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[#d2d2d7] dark:border-[#38383a]">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#86868b] dark:text-[#98989d]">by</span>
              <span className="text-[13px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                {item.seller}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#ff9500] text-[#ff9500]" />
              <span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {item.rating}
              </span>
            </div>
          </div>
          
          {/* Price Badge */}
          <div className="mt-3">
            <span className="inline-block px-3 py-1.5 bg-[#007aff] dark:bg-[#0a84ff] text-white text-[15px] font-semibold rounded-full">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

