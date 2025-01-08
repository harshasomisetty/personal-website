'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || '/';

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
  ];

  return (
    <aside className="md:w-min md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row md:flex-col items-center justify-center px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                {
                  'text-neutral-500': path !== pathname,
                  'font-bold': path === pathname,
                },
              )}
            >
              <span className="relative py-[5px] px-[10px]">{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
