'use client';

import { useQuery } from 'convex/react';
import { ChevronDown, Plus, Search } from 'lucide-react';
import { api } from '~/convex/_generated/api';
import { Button } from '../ui/button';
import Loader from '../common/loader';

const DashboardProducts = () => {
  const getProductsByUser = useQuery(api.products.getProductsByUser);
  // console.log(getProductsByUser);

  return (
    <div>
      <header className='mb-4'>
        <h1 className='text-lg mb-4 sm:hidden'></h1>
        <label
          htmlFor='searchProd'
          className='flex items-center justify-between px-1 py-1 border rounded-md bg-white/85 shadow-md sm:px-4'
        >
          <aside className='flex items-center gap-2'>
            <Search size={15} className='text-gray-500' />
            <input
              type='search'
              name='searchProd'
              placeholder='Search for products'
              className='w-full py-1 bg-transparent border-none focus:outline-none'
            />
          </aside>
          <button className='flex items-center gap-1 bg-gray-600 border text-white rounded-md px-2 py-1'>
            <span>filters</span>
            <ChevronDown size={13} />
          </button>
        </label>
      </header>
      {getProductsByUser ? (
        getProductsByUser.length === 0 && (
          <p className='italic text-gray-600'>
            No products found. Either no products exist or none match the
            filters you specified
          </p>
        )
      ) : (
        <Loader />
      )}
      <div className='mt-3'>
        <Button>
          <span className='hidden sm:block'>Create new product</span>
          <span className='sm:hidden'>
            <Plus />
          </span>
        </Button>
      </div>
      <section></section>
    </div>
  );
};
export default DashboardProducts;
