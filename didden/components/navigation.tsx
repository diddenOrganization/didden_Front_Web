'use client';

import { Avatar, CustomFlowbiteTheme, Navbar } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';

const customNavbarTheme: CustomFlowbiteTheme['navbar'] = {
  link: {
    active: {
      on: 'text-orange-700 dark:text-white md:bg-transparent md:text-orange-700',
      off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-yellow-300 md:dark:hover:bg-transparent md:dark:hover:text-white',
    },
  },
};

const customAvatarTheme: CustomFlowbiteTheme['avatar'] = {
  root: {
    size: {
      md: 'size-25',
    },
  },
};

export default function Navigation() {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img src="/Image/d-clear.png" className="mr-3 h-20 sm:h-20" alt=".didden" onClick={() => router.push('/')} />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">.didden</span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle theme={{ icon: 'size-20' }} />
          <Avatar
            rounded
            className="ml-3"
            size="md"
            theme={customAvatarTheme}
            onClick={() => router.push('/my-page')}
          />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={path === '/'} className="py-5" theme={customNavbarTheme?.link}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/tour" active={path === '/tour'} className="py-5" theme={customNavbarTheme?.link}>
            Tour
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
