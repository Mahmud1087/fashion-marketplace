import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/common/navbar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/common/footer';
import { ConvexClientProvider } from '../ConvexClientProvider';
import { ClerkProvider } from '@clerk/nextjs';

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
        <ClerkProvider
          dynamic
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <main className=''>
              <Navbar />
              {children}
              <Footer />
            </main>
            <Toaster />
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
