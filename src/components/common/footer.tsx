import Link from 'next/link';
import MaxWidthWrapper from './max-width-wrapper';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Logo from './logo';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-[#272343] text-[13px] text-gray-300 pt-14 pb-3'>
      <MaxWidthWrapper>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0'>
          {/* Section 1: Logo and About */}
          <div className='mb-6'>
            <Logo />
            <p className='my-6'>
              Your one-stop shop for fashion items. We connect buyers with
              sellers of trendy clothes, shoes, and accessories.
            </p>
            <aside className='flex items-center gap-2'>
              <a
                href=''
                className='h-8 w-8 rounded-full bg-gray-300 shadow-md flex items-center justify-center text-[#272343] transition-all border hover:shadow'
              >
                <Facebook size={18} strokeWidth={1} color='blue' fill='blue' />
              </a>
              <a
                href=''
                className='h-8 w-8 rounded-full bg-gray-300 shadow-md flex items-center justify-center text-[#272343] transition-all border hover:shadow'
              >
                <Instagram size={18} strokeWidth={1} color='purple' />
              </a>
              <a
                href=''
                className='h-8 w-8 rounded-full bg-gray-300 shadow-md flex items-center justify-center text-[#272343] transition-all border hover:shadow'
              >
                <Linkedin size={18} strokeWidth={1} color='blue' fill='blue' />
              </a>
              <a
                href=''
                className='h-8 w-8 rounded-full bg-gray-300 shadow-md flex items-center justify-center text-[#272343] transition-all border hover:shadow'
              >
                <Twitter size={18} strokeWidth={1} color='black' fill='black' />
              </a>
            </aside>
          </div>

          {/* Section 2: Quick Links */}
          <div className='mb-6'>
            <header className='flex items-center mb-6 '>
              <h1 className='relative text-xl after:absolute after:w-1/2 after:h-[2px] after:bg-orange-600 after:left-0 after:-bottom-1 after:rounded-full'>
                Quick Links
              </h1>
            </header>
            <ul className='flex flex-col gap-3'>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/terms-conditions'>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Customer Service */}
          <div className='mb-6'>
            <header className='flex items-center mb-6 '>
              <h1 className='relative text-xl after:absolute after:w-1/2 after:h-[2px] after:bg-orange-600 after:left-0 after:-bottom-1 after:rounded-full'>
                Customer Service
              </h1>
            </header>
            <ul className='flex flex-col gap-3'>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/faq'>FAQ</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/shipping-info'>Shipping Information</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/returns'>Returns & Refunds</Link>
              </li>
              <li className='transition-all hover:translate-x-2 hover:text-gray-300/55'>
                <Link href='/support'>Support</Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter Subscription */}
          <div>
            <header className='flex items-center mb-6 '>
              <h1 className='relative text-xl after:absolute after:w-1/2 after:h-[2px] after:bg-orange-600 after:left-0 after:-bottom-1 after:rounded-full'>
                Subscribe to newsletter
              </h1>
            </header>
            <p>Get the latest updates on new products and upcoming sales.</p>
            <div className='flex mt-4'>
              <Input
                placeholder='Enter your email'
                className='mr-2 border-gray-500'
              />
              <Button className='bg-blue-500 text-white hover:bg-blue-600'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className='container mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-gray-500'>
          <p>&copy; 2024 FashMall. All rights reserved.</p>

          {/* Payment details icons here */}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
