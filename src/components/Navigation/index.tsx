'use client';

import { TabItem, Tabs } from '@worldcoin/mini-apps-ui-kit-react';
import { Home, User } from 'iconoir-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * This component uses the UI Kit to navigate between pages
 * Bottom navigation is the most common navigation pattern in Mini Apps
 * We require mobile first design patterns for mini apps
 * Read More: https://docs.world.org/mini-apps/design/app-guidelines#mobile-first
 * 
 * Navigation bar is positioned with 12px space from iOS & Android bottom bar
 */

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState('home');

  useEffect(() => {
    if (pathname?.startsWith('/home')) {
      setValue('home');
    } else if (pathname?.startsWith('/profile')) {
      setValue('profile');
    }
  }, [pathname]);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (newValue === 'home') {
      router.push('/home');
    } else if (newValue === 'profile') {
      router.push('/profile');
    }
  };

  return (
    <div className="pb-3 safe-area-bottom">
      <Tabs value={value} onValueChange={handleValueChange}>
        <TabItem value="home" icon={<Home />} label="Home" />
        <TabItem value="profile" icon={<User />} label="Profile" />
      </Tabs>
    </div>
  );
};
