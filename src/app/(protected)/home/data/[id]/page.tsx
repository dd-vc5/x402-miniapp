'use client';

import { mockDataItems } from '@/data/mockData';
import { Page } from '@/components/PageLayout';
import { ArrowLeft, Star } from 'iconoir-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DataDetailPage() {
  const params = useParams();
  const router = useRouter();
  const item = mockDataItems.find(i => i.id === params.id);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  if (!item) {
    return (
      <Page>
        <Page.Main>
          <div className="text-center">
            <p>Data not found</p>
            <Link href="/home" className="btn btn-primary mt-4">
              Go Home
            </Link>
          </div>
        </Page.Main>
      </Page>
    );
  }

  const isPurchased = item.purchased;

  const handlePurchase = () => {
    // In a real app, this would trigger a purchase flow
    alert('Purchase functionality would be implemented here');
  };

  const handleSubmitReview = () => {
    // In a real app, this would submit the review
    alert('Review submitted!');
    router.push('/home');
  };

  return (
    <Page>
      <Page.Main className="pb-24 max-w-md mx-auto bg-[#f5f5f7] dark:bg-black">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-white/50 dark:hover:bg-[#1c1c1e]/50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#1d1d1f] dark:text-[#f5f5f7]" />
          </button>
        </div>

        {/* Background Image */}
        <div className="px-6 mb-6">
          <div
            className="h-64 w-full rounded-3xl overflow-hidden"
            style={{ 
              background: item.bgImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Content */}
        <div className="px-6 space-y-6">
          {/* Title */}
          <h1 className="text-[34px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
            {item.title}
          </h1>

          {/* Description */}
          <p className="text-[17px] text-[#86868b] dark:text-[#98989d] leading-relaxed">
            {item.description}
          </p>

          {/* Seller Info */}
          <div className="flex items-center gap-2">
            <span className="text-[15px] text-[#86868b] dark:text-[#98989d]">by</span>
            <span className="text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              {item.seller}
            </span>
            <div className="flex items-center gap-1 ml-auto">
              <Star className="w-5 h-5 fill-[#ff9500] text-[#ff9500]" />
              <span className="text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {item.rating}
              </span>
            </div>
          </div>

          {/* Content */}
          {isPurchased ? (
            <>
              {/* Full Content for Purchased Items */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
                  Complete Data
                </h2>
                <p className="text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Review Section */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
                  Leave a Review
                </h2>
                
                {/* Rating */}
                <div className="mb-4">
                  <p className="text-[15px] text-[#86868b] dark:text-[#98989d] mb-3">Rating</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= rating
                              ? 'fill-[#ff9500] text-[#ff9500]'
                              : 'text-[#d2d2d7] dark:text-[#38383a]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <textarea
                    className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#38383a] rounded-xl text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-[#86868b] dark:placeholder:text-[#98989d] focus:outline-none focus:ring-2 focus:ring-[#007aff] dark:focus:ring-[#0a84ff] resize-none"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmitReview}
                  className="w-full py-4 px-6 bg-[#007aff] dark:bg-[#0a84ff] text-white rounded-xl font-bold text-[17px] hover:bg-[#0051d5] dark:hover:bg-[#409cff] transition-colors active:scale-95 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={rating === 0}
                >
                  Submit Review
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Preview for Non-Purchased Items */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
                  Preview
                </h2>
                <p className="text-[17px] text-[#86868b] dark:text-[#98989d] line-clamp-3 leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Price and Purchase Button */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[34px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handlePurchase}
                  className="w-full py-4 px-6 bg-[#007aff] dark:bg-[#0a84ff] text-white rounded-xl font-bold text-[17px] hover:bg-[#0051d5] dark:hover:bg-[#409cff] transition-colors active:scale-95 shadow-sm"
                >
                  Purchase
                </button>
              </div>
            </>
          )}
        </div>
      </Page.Main>
    </Page>
  );
}

