// import Hero from '@/components/common/hero';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import box from '~/public/box.png';
import truck from '~/public/delivery-truck.png';
import shield from '~/public/shield.png';
import clock from '~/public/24-hours.png';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import menCategory from '~/public/men-category.png';
import womenCategory from '~/public/women-category.png';
import kidsCategory from '~/public/kids-category.png';
import heroImg from '~/public/heroimg1.png';
import { Dancing_Script } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const benefits = [
  {
    img: box,
    title: 'Discount',
    description: 'Every week now on sale',
  },
  {
    img: truck,
    title: 'Free Delivery',
    description: '100% Free for all orders',
  },
  {
    img: clock,
    title: 'Great Support 24/7',
    description: 'Support always available',
  },
  {
    img: shield,
    title: 'Secure Payment',
    description: '100% Secure Payment Method',
  },
];

const Home = () => {
  return (
    <div className='overflow-hidden'>
      {/* <Hero /> */}

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
            <Image src={heroImg} alt='hero image' />
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
        <div className='flex items-center mb-10'>
          <hr className='border border-black w-[20%] sm:w-[40%] mx-auto' />
          <h1
            className={cn(
              'text-4xl font-bold w-3/5 lg:w-[25%] text-center',
              dancingScript.className
            )}
          >
            Top Categories
          </h1>
          <hr className='border border-black w-[20%] sm:w-[40%] mx-auto' />
        </div>
        <section className='grid gap-6 sm:gap-3 sm:grid-cols-3 lg:gap-6'>
          <div className='w-full h-[25rem] bg-black/20 relative transition-all'>
            <div className='absolute top-0 left-0 px-5 py-2 bg-teal-700 text-white '>
              Men
            </div>
            <div className='w-full h-full'>
              <Image
                src={menCategory}
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
          <div className='w-full h-[25rem] bg-black/20 relative transition-all'>
            <div className='absolute top-0 left-0 px-5 py-2 bg-rose-800 text-white '>
              Women
            </div>
            <div className='w-full h-full'>
              <Image
                src={womenCategory}
                alt='woman image'
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
          <div className='w-full h-[25rem] bg-black/20 relative transition-all'>
            <div className='absolute top-0 left-0 px-5 py-2 bg-[#272343] text-white '>
              Kids
            </div>
            <div className='w-full h-full'>
              <Image
                src={kidsCategory}
                alt='kid image'
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
        </section>
      </section>
    </div>
  );
};
export default Home;
