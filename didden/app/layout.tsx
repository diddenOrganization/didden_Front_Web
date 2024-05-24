import { Inter } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Navigation from '@/components/navigation';
import Provider from '@/utils/provider';

import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: '%s | .didden', default: '.didden' },
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
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Provider>
      </body>
    </html>
  );
}
