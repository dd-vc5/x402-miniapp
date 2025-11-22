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
      <Page.Main className="pb-24 max-w-md mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="btn btn-ghost btn-sm mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Background Image */}
        <div
          className="h-48 w-full rounded-lg mb-4"
          style={{ background: item.bgImage }}
        />

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">{item.title}</h1>

        {/* Description */}
        <p className="text-base-content/70 mb-4">{item.description}</p>

        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-base-content/60">by</span>
          <span className="text-sm font-semibold">{item.seller}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-sm font-semibold">{item.rating}</span>
          </div>
        </div>

        {/* Content */}
        {isPurchased ? (
          <>
            {/* Full Content for Purchased Items */}
            <div className="card bg-base-200 p-4 mb-4">
              <h2 className="font-semibold mb-2">Complete Data</h2>
              <p className="text-sm">{item.content}</p>
            </div>

            {/* Review Section */}
            <div className="card bg-base-100 shadow-md p-4 mb-4">
              <h2 className="font-semibold mb-4">Leave a Review</h2>
              
              {/* Rating */}
              <div className="mb-4">
                <p className="text-sm mb-2">Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="btn btn-ghost btn-sm p-0"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-warning text-warning'
                            : 'text-base-content/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your review..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitReview}
                className="btn btn-primary w-full"
                disabled={rating === 0}
              >
                Submit Review
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Preview for Non-Purchased Items */}
            <div className="card bg-base-200 p-4 mb-4">
              <h2 className="font-semibold mb-2">Preview</h2>
              <p className="text-sm line-clamp-3">{item.content}</p>
            </div>

            {/* Price and Purchase Button */}
            <div className="card bg-base-100 shadow-md p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePurchase}
                className="btn btn-primary w-full"
              >
                Purchase
              </button>
            </div>
          </>
        )}
      </Page.Main>
    </Page>
  );
}

