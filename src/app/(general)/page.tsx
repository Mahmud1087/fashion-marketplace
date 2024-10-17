import MaxWidthWrapper from '@/components/common/max-width-wrapper';

import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';

import heroImg from '~/public/heroimg1.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Heading from '@/components/common/heading';
import { benefits, products, topCategories } from '@/lib/data';
import ListedProducts from '@/components/common/listedProducts';
import { cn } from '@/lib/utils';

const featuredProducts = products.filter((product) => product.isFeatured);
const newProducts = products.filter((product) => product.isNew);
const discountedProducts = products.filter((product) => product.isDiscounted);

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <section className='bg-slate-100 shadow-lg'>
        <MaxWidthWrapper className='relative w-screen pt-32 pb-56  flex items-center'>
          <aside className='flex items-center justify-center flex-col sm:items-start'>
            <p className='text-center sm:text-start text-sm text-orange-700 mb-3 font-medium'>
              WELCOME TO FASHMALL
            </p>
            <h1 className='text-center sm:text-start text-2xl text-black font-bold mb-3 sm:text-3xl lg:text-4xl'>
              Discover Fashion That <br />
              <span className='text-primary'> Defines You</span>
            </h1>
            <p className='text-base text-gray-500 text-center sm:text-start mb-10 w-full mx-auto sm:mx-0 sm:px-0 sm:w-2/5 lg:w-1/2 px-5'>
              Shop the latest trends, find unique pieces, and support
              independent sellers—all in one place. Join the marketplace where
              fashion meets convenience.
            </p>
            <div className='flex items-center justify-center gap-5 w-full sm:justify-start'>
              <Button
                variant='outline'
                className='text-base flex gap-4 group transition-all shadow-md'
              >
                Start Shopping
              </Button>
              <Button className='text-base flex gap-4 group transition-all bg-gray-800 hover:bg-gray-900 shadow-md'>
                Become a seller
              </Button>
            </div>
          </aside>
          <div className='hidden absolute irregular-shape right-0 top-5 bg-black/25 sm:block'></div>
          <div className='absolute right-0 top-0 hidden sm:block'>
            <Image src={heroImg} priority alt='hero image' />
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className='rounded-lg bg-white shadow-2xl p-8 mb-14 -mt-14 relative grid gap-10 sm:grid-cols-2 sm:-mt-24 lg:grid-cols-4 lg:gap-0 lg:-mt-10'>
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className='flex items-center gap-4'>
              <div className='w-10 h-10'>
                <Image
                  src={benefit.img}
                  alt={`${benefit.title} image`}
                  className='w-full h-full'
                />
              </div>
              <aside className='flex flex-col'>
                <h1 className='text-blue-950 font-bold text-sm'>
                  {benefit.title}
                </h1>
                <p className='text-gray-400'>{benefit.description}</p>
              </aside>
            </div>
          );
        })}
      </MaxWidthWrapper>

      <section className='px-10 sm:px-16 my-32 lg:px-44'>
        <Heading title='Top Categories' />
        <section className='grid gap-6 sm:gap-3 sm:grid-cols-3 lg:gap-6'>
          {topCategories.map((category) => {
            return (
              <div
                key={category.title}
                className='w-full h-[25rem] bg-black/20 relative transition-all'
              >
                <div
                  className={cn(
                    'absolute top-0 left-0 px-5 py-2 text-white',
                    category.titleBg
                  )}
                >
                  {category.title}
                </div>
                <div className='w-full h-full'>
                  <Image
                    src={category.src}
                    alt='man image'
                    className='w-full h-full'
                  />
                </div>
                <Link
                  href=''
                  className={buttonVariants({
                    className:
                      'absolute bottom-16 left-1/2 -translate-x-1/2 px-6 bg-black/95 hover:bg-black flex gap-3 group',
                  })}
                >
                  <span>SHOP</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={3}
                    className='group-hover:translate-x-1 transition-all text-primary'
                  />
                </Link>
              </div>
            );
          })}
        </section>
      </section>

      <MaxWidthWrapper className='my-32'>
        <Heading title='Featured Products' />
        <ListedProducts products={featuredProducts} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-32'>
        <Heading title='New Products' />
        <ListedProducts products={newProducts} />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='my-32'>
        <Heading title='Discounted Products' />
        <ListedProducts products={discountedProducts} />
      </MaxWidthWrapper>
    </div>
  );
};
export default Home;
