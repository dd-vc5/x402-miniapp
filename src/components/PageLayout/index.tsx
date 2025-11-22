import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * This component is a simple page layout component to help with design consistency
 * Follows Mini App design guidelines with proper spacing
 */
export const Page = (props: { children: ReactNode; className?: string }) => {
  return (
    <div className={twMerge(clsx('flex h-dvh flex-col bg-[#f5f5f7] dark:bg-black', props.className))}>
      {props.children}
    </div>
  );
};

const Header = (props: { children: ReactNode; className?: string; isSecondary?: boolean }) => {
  // Secondary pages: 24px padding, Main pages: 24px padding (default)
  return (
    <header
      className={twMerge(
        'bg-[#f5f5f7] dark:bg-black flex flex-col justify-center px-6 pt-6 pb-3 z-10',
        clsx(props.className),
      )}
    >
      {props.children}
    </header>
  );
};

const Main = (props: { children: ReactNode; className?: string }) => {
  return (
    <main
      className={twMerge(
        clsx('grow overflow-y-auto overscroll-none', props.className),
      )}
    >
      {props.children}
    </main>
  );
};

const Footer = (props: { children: ReactNode; className?: string }) => {
  // Tab bar should be 12px from iOS/Android bottom bar
  // Buttons should be 24px from iOS bottom bar
  return (
    <footer className={twMerge('px-6 pb-3 safe-area-bottom', clsx(props.className))}>
      {props.children}
    </footer>
  );
};

Page.Header = Header;
Page.Main = Main;
Page.Footer = Footer;
