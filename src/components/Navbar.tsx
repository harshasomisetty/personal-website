'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || '/';

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/blog', name: 'Blog' },
    // { path: '/books', name: 'Books' },
    { path: '/projects', name: 'Projects' },
  ];

  return (
    <aside className="md:w-[150px] flex-none md:min-w-[150px] -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row md:flex-col items-start justify-center px-4 md:px-0 pb-0 md:relative">
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle w-full',
                {
                  'text-neutral-500': path !== pathname,
                  'font-bold': path === pathname,
                },
              )}
            >
              <span className="relative py-[5px] px-[10px] block w-full">
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
