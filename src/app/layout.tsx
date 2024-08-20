import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.scss';
import { ThemeProvider } from '@/components/theme-provider';
import { NextAuthProvider } from './provider'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Penni AI',
  description: `Unlimited Intelligence`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
        >
            <NextAuthProvider>
          {children}
                </NextAuthProvider>

        </ThemeProvider>

      </body>
    </html>
  );
}
