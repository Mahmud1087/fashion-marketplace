import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/common/navbar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/common/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fahion marketplace',
  description: 'Coded by enesi_dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} text-[13px] antialiased`}>
        <main className=''>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
