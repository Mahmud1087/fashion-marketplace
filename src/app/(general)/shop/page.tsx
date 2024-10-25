import BackButton from '@/components/common/back-button';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import MobileFilteringOptions from '@/components/common/mobile-filter';
import { PaginationSection } from '@/components/common/pagination-section';

const Shop = () => {
  return (
    <MaxWidthWrapper className='my-11'>
      <header className='flex flex-col gap-5'>
        <BackButton />
        <div className='flex justify-between items-center'>
          <MobileFilteringOptions />
          <PaginationSection />
        </div>
      </header>
    </MaxWidthWrapper>
  );
};
export default Shop;
