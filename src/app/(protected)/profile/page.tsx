'use client';

import { DataCard } from '@/components/DataCard';
import { Page } from '@/components/PageLayout';
import { getUserListings, getUserPurchases, mockUser } from '@/data/mockData';
import { Star } from 'iconoir-react';

export default function ProfilePage() {
  const username = mockUser.username;
  const listings = getUserListings(username);
  const purchases = getUserPurchases(username);

  return (
    <Page>
      <Page.Main className="pb-24 max-w-md mx-auto bg-[#f5f5f7] dark:bg-black">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-[34px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1 leading-tight">
            Profile
          </h1>
          <p className="text-[17px] text-[#86868b] dark:text-[#98989d]">
            {username}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="px-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
              <p className="text-[13px] text-[#86868b] dark:text-[#98989d] mb-2">Your Earnings</p>
              <p className="text-[28px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">
                ${mockUser.earnings}
              </p>
            </div>
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
              <p className="text-[13px] text-[#86868b] dark:text-[#98989d] mb-2">Your Rating</p>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-[#ff9500] text-[#ff9500]" />
                <p className="text-[28px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {mockUser.rating}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings */}
        <div className="px-6 mb-6">
          <h2 className="text-[22px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
            My Listings
          </h2>
          {listings.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {listings.map((item) => (
                <div key={item.id} className="shrink-0 w-64">
                  <DataCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-8 text-center shadow-sm">
              <p className="text-[15px] text-[#86868b] dark:text-[#98989d]">No listings yet</p>
            </div>
          )}
        </div>

        {/* My Purchases */}
        <div className="px-6 mb-6">
          <h2 className="text-[22px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
            My Purchases
          </h2>
          {purchases.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {purchases.map((item) => (
                <div key={item.id} className="shrink-0 w-64">
                  <DataCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-8 text-center shadow-sm">
              <p className="text-[15px] text-[#86868b] dark:text-[#98989d]">No purchases yet</p>
            </div>
          )}
        </div>
      </Page.Main>
    </Page>
  );
}

