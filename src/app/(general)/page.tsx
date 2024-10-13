// import Hero from '@/components/common/hero';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import box from '~/public/box.png';
import truck from '~/public/delivery-truck.png';
import shield from '~/public/shield.png';
import clock from '~/public/24-hours.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import menCategory from '~/public/men-category.png';
import womenCategory from '~/public/women-category.png';
import kidsCategory from '~/public/kids-category.png';
import heroImg from '~/public/heroimg1.png';
// import { ArrowRight } from 'lucide-react';

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
            <p className='text-base text-gray-500 text-center sm:text-start mb-10 w-full mx-auto sm:mx-0 sm:px-0 sm:w-3/5 lg:w-1/2 px-5'>
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

      <MaxWidthWrapper className='my-44'>
        <section className='grid gap-6 sm:grid-cols-4'>
          <div className='w-full h-72 bg-black/20 rounded-xl relative transition-all group'>
            {/* <h1 className='absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-4xl text-primary cursor-pointer group-hover:rotate-0 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all'>
              Men
            </h1> */}
            <div className='w-full h-full'>
              <Image
                src={menCategory}
                alt='man image'
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='w-full h-72 bg-black/20 rounded-xl relative transition-all group'>
            {/* <h1 className='absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-4xl text-primary cursor-pointer group-hover:rotate-0 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all'>
              Women
            </h1> */}
            <div className='w-full h-full'>
              <Image
                src={womenCategory}
                alt='man image'
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='w-full h-72 bg-black/20 rounded-xl relative transition-all group'>
            {/* <h1 className='absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-4xl text-primary cursor-pointer group-hover:rotate-0 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all'>
              Kids
            </h1> */}
            <div className='w-full h-full'>
              <Image
                src={kidsCategory}
                alt='man image'
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='w-full h-56'>Top Categories</div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};
export default Home;
