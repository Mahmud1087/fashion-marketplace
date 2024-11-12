'use client';

import { cn } from '@/lib/utils';
import Logo from '../common/logo';
import { Home, LogOut, Package, Settings, ShoppingBag } from 'lucide-react';
import { SignOutButton } from '@clerk/clerk-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const sidebarlinks = [
  {
    text: 'Overview',
    icon: <Home size={18} />,
    href: '/dashboard',
  },
  {
    text: 'Order',
    icon: <ShoppingBag size={18} />,
    href: '/dashboard/orders',
  },
  {
    text: 'Products',
    icon: <Package size={18} />,
    href: '/dashboard/listed-products',
  },
  {
    text: 'Settings',
    icon: <Settings size={18} />,
    href: '/dashboard/settings',
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-10 w-1/6 h-full border-r shadow bg-[#080717] py-5 flex flex-col justify-between sm:py-8'
      )}
    >
      <div>
        <Logo className='text-white ml-6 hidden sm:block' />
        <h1 className='text-white text-lg text-center sm:hidden'>FM</h1>
        <ul className='flex flex-col gap-5 mt-9 sm:gap-6'>
          {sidebarlinks.map((list, index) => (
            <li key={index} className='px-3 sm:px-4'>
              <Link
                href={list.href}
                className={cn(
                  'text-white w-full hover:bg-primary hover:rounded-md transition-all flex items-center justify-center py-2 sm:px-3 sm:items-center sm:justify-normal sm:gap-4',
                  {
                    'bg-primary rounded-md': pathname === list.href,
                  }
                )}
              >
                <span>{list.icon}</span>
                <span className='hidden sm:block'>{list.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className='text-red-500 flex flex-col items-center gap-3 sm:flex-row sm:ml-7'>
        <LogOut size={18} />
        <SignOutButton />
      </button>
    </aside>
  );
};
export default DashboardSidebar;
