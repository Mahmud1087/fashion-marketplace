'use client';

import BackButton from '@/components/common/back-button';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import MobileFilteringOptions from '@/components/common/mobile-filter';
import { PaginationSection } from '@/components/common/pagination-section';
import ProductCard from '@/components/common/product-card';
import SearchField from '@/components/common/search-products';
import { useStore } from '@/store/store';

const Shop = () => {
  const products = useStore((state) => state.products);

  return (
    <MaxWidthWrapper className='my-11'>
      <div className='flex justify-between items-center gap-5'>
        <BackButton />
        <SearchField className='w-full' />
      </div>
      <header className='flex flex-col-reverse gap-5 my-6'>
        <div className='flex justify-between items-center lg:justify-end'>
          <MobileFilteringOptions />
          <PaginationSection />
        </div>
      </header>

      <div className='flex'>
        <aside className='hidden w-1/4 lg:block'>
          Desktop filterig options here
        </aside>

        <section className='w-full grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:gap-x-4 md:gap-y-11 xl:grid-cols-4 lg:w-3/4'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      </div>
    </MaxWidthWrapper>
  );
};
export default Shop;
