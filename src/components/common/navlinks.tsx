'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'About',
    href: '/about',
  },
];

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col items-center gap-7 sm:flex-row'>
      {links.map((link) => {
        return (
          <li
            key={link.label}
            className='text-lg sm:text-sm flex w-full text-center'
          >
            <Link
              href={link.href}
              className={cn(
                'text-blue-950 font-bold py-1 px-3 hover:bg-primary/80 hover:py-1 hover:px-3 hover:rounded-full hover:text-white transition-all sm:text-gray-300 w-full sm:font-normal sm:hover:bg-primary/40 sm:hover:text-gray-300',
                {
                  'bg-primary/80 py-1 px-3 rounded-full w-full text-white sm:bg-primary/40':
                    pathname === link.href,
                }
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
