import './globals.css';
import { Inter } from 'next/font/google';

import Navigation from '@/components/navigation';
import Provider from '@/utils/provider';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: '%s | .didden', default: 'Loading...' },
  description: '.didden',
  icons: '/Image/d-clear.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  );
}
