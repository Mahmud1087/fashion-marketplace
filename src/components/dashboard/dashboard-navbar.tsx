'use client';

import { UserButton, useUser } from '@clerk/clerk-react';
import SearchField from '../common/search-products';
import { Bell } from 'lucide-react';

const DashboardNavbar = () => {
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
  );
};
export default DashboardNavbar;
