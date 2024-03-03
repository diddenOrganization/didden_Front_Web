'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="margincenter fixed left-1/2 top-20 z-10 w-[30%] -translate-x-1/2 rounded-50 bg-[#2d2d2d] px-0 py-20 text-white">
      <ul className="flex justify-center gap-50">
        <li className="list-none hover:scale-105">
          <Link href="/">Home</Link> {path === '/' ? '🍿' : ''}
        </li>
        <li className="list-none hover:scale-105">
          <Link href="/about-us">About Us</Link> {path === '/about-us' ? '🍿' : ''}
        </li>
      </ul>
    </nav>
  );
}
