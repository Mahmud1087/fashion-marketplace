import Hero from '@/components/common/hero';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import box from '~/public/box.png';
import truck from '~/public/delivery-truck.png';
import shield from '~/public/shield.png';
import clock from '~/public/24-hours.png';
import Image from 'next/image';

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
      <Hero />
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
    </div>
  );
};
export default Home;
