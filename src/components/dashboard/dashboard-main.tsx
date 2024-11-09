// import { Dispatch, SetStateAction } from 'react';

import { UserButton, useUser } from '@clerk/clerk-react';
import { Bell } from 'lucide-react';
import SearchField from '../common/search-products';
import Overview from './overview';
import Analytics from './analytics';
import Order from './order';
import DashboardProducts from './products';
import DashboardSettings from './settings';

type DashboardMainProps = {
  link: string;
  //   setLink: Dispatch<SetStateAction<string>>;
};

const DashboardMain = ({ link }: DashboardMainProps) => {
  const { user } = useUser();

  const date = new Date();
  const hours = date.getHours();
  const greeting =
    hours < 12
      ? 'Good Morning'
      : hours < 18
        ? 'Good Afternoon'
        : 'Good Evening';

  return (
    <div className='w-5/6 h-full relative left-[16.666667%]'>
      <nav className='border-b shadow-xs p-4 flex justify-between items-center bg-white sm:px-14'>
        <h1 className='text-sm'>
          {greeting}, {user?.firstName?.toLocaleUpperCase()}
        </h1>

        <div className='hidden sm:block'>
          <SearchField />
        </div>

        <div className='flex items-center gap-3'>
          <span>
            <Bell size={20} />
          </span>
          <UserButton />
        </div>
      </nav>
      <section className='p-4 sm:px-14'>
        {link === 'Overview' ? (
          <Overview />
        ) : link === 'Analytics' ? (
          <Analytics />
        ) : link === 'Order' ? (
          <Order />
        ) : link === 'Products' ? (
          <DashboardProducts />
        ) : link === 'Settings' ? (
          <DashboardSettings />
        ) : null}
      </section>
    </div>
  );
};
export default DashboardMain;
