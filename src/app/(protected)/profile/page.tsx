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
      <Page.Main className="pb-24 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body p-4">
              <p className="text-sm opacity-80">Your Earnings</p>
              <p className="text-2xl font-bold">${mockUser.earnings}</p>
            </div>
          </div>
          <div className="card bg-warning text-warning-content shadow-md">
            <div className="card-body p-4">
              <p className="text-sm opacity-80">Your Rating</p>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-current" />
                <p className="text-2xl font-bold">{mockUser.rating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">My Listings</h2>
          {listings.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {listings.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-64">
                  <DataCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="card bg-base-200 p-6 text-center">
              <p className="text-base-content/60">No listings yet</p>
            </div>
          )}
        </div>

        {/* My Purchases */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">My Purchases</h2>
          {purchases.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {purchases.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-64">
                  <DataCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="card bg-base-200 p-6 text-center">
              <p className="text-base-content/60">No purchases yet</p>
            </div>
          )}
        </div>
      </Page.Main>
    </Page>
  );
}

