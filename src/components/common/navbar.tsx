'use client';

import { Check, Heart, User } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';
import Logo from './logo';
import Navlinks from './navlinks';
import Link from 'next/link';
import Sidebar from './sidebar';
import SearchField from './search-products';
import MaxWidthWrapper from './max-width-wrapper';
import Cart from './cart';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { ref, inView } = useInView({
    threshold: 1.0,
    rootMargin: '100px',
  });

  return (
    <>
      <header className='bg-[#272343] py-3 text-[13px] text-gray-300 font-medium hidden sm:block'>
        <div className='h-full w-[90%] mx-auto hidden justify-between items-center sm:w-4/5 sm:flex'>
          <h1 className='items-center gap-1 hidden lg:flex'>
            <Check className='text-green-500' size={20} />
            <span>Your number one fashion marketplace</span>
          </h1>

          <Navlinks />

          <aside className='flex items-center gap-6'>
            <Button variant='ghost' asChild className='text-[13px]'>
              <Link href='/faq'>Faqs</Link>
            </Button>
            <Button
              variant='ghost'
              className='flex items-center gap-2 text-[13px]'
            >
              <span className='border border-primary rounded-full h-5 w-5 flex items-center justify-center'>
                ?
              </span>
              Need help
            </Button>
          </aside>
        </div>
      </header>

      <div ref={ref} className=''></div>

      <nav
        className={cn(
          'h-16 flex items-center justify-center bg-[#9A9CAA]/50 transition-all duration-300 ease-in-out',
          {
            'sticky top-0 left-0 w-full bg-[#9A9CAA]/65 shadow-lg backdrop-blur-md z-50':
              !inView,
            '-top-11': inView,
          }
        )}
      >
        <div className='flex items-center justify-between w-[90%] mx-auto sm:w-4/5'>
          <Logo />

          <SearchField className='hidden sm:block' />

          <div className='flex gap-4 items-center'>
            <Cart />

            <Sidebar />

            <Button variant='secondary' className='hidden sm:block'>
              <Heart size={18} />
            </Button>
            <Link
              href='/login'
              className={buttonVariants({
                variant: 'secondary',
                className: 'hidden sm:block',
              })}
            >
              <User size={18} />
            </Link>
          </div>
        </div>
      </nav>

      <div className='bg-[#272343] block sm:hidden'>
        <MaxWidthWrapper className='py-3 flex justify-between items-center'>
          <SearchField className='block sm:hidden' />
          <section className='flex gap-3'>
            <Button variant='secondary' className='block sm:hidden'>
              <Heart size={18} />
            </Button>
            <Link
              href='/login'
              className={buttonVariants({
                variant: 'secondary',
                className: 'block sm:hidden',
              })}
            >
              <User size={18} />
            </Link>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
