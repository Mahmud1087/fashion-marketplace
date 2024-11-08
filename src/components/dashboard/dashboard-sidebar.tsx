'use client';

import { cn } from '@/lib/utils';
import Logo from '../common/logo';
import {
  ChartNoAxesCombined,
  Home,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
} from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { SignOutButton } from '@clerk/clerk-react';

type Props = {
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
};

const sidebarlinks = [
  {
    text: 'Overview',
    icon: <Home size={18} />,
  },
  {
    text: 'Analytics',
    icon: <ChartNoAxesCombined size={18} />,
  },
  {
    text: 'Order',
    icon: <ShoppingBag size={18} />,
  },
  {
    text: 'Products',
    icon: <Package size={18} />,
  },
  {
    text: 'Settings',
    icon: <Settings size={18} />,
  },
];

const DashboardSidebar = ({ link, setLink }: Props) => {
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
              <button
                className={cn(
                  'text-white w-full hover:bg-primary hover:rounded-md transition-all flex items-center justify-center py-2 sm:px-3 sm:items-center sm:justify-normal sm:gap-4',
                  {
                    'bg-primary rounded-md': link === list.text,
                  }
                )}
                onClick={() => setLink(list.text)}
              >
                <span>{list.icon}</span>
                <span className='hidden sm:block'>{list.text}</span>
              </button>
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
