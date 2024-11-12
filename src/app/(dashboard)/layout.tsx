import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ConvexClientProvider } from '../ConvexClientProvider';
import { ClerkProvider } from '@clerk/nextjs';
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar';
import DashboardNavbar from '@/components/dashboard/dashboard-navbar';

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
      <body
        className={`${inter.className} text-[13px] antialiased bg-secondary`}
      >
        <ClerkProvider
          dynamic
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <div>
              <DashboardSidebar />
              <div className='w-5/6 h-full relative left-[16.666667%] flex flex-col gap-3 sm:gap-6'>
                <DashboardNavbar />
                <main className='px-3 sm:px-10'>{children}</main>
              </div>
            </div>
            <Toaster />
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
