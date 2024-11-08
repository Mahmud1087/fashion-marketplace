import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Link from 'next/link';
import { SignOutButton, useUser } from '@clerk/clerk-react';

const UserBtn = () => {
  const { user } = useUser();

  return (
    <Popover>
      <PopoverTrigger>
        <div className='w-8 h-8'>
          <Image
            src={user?.imageUrl as string}
            alt='user image'
            width={1000}
            height={1000}
            className='w-full h-full rounded-full cursor-pointer'
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className='mt-2 relative z-[1000] before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-5 before:h-5 before:w-5 before:border-l-[10px] before:border-r-[10px] before:border-r-transparent before:border-l-transparent before:border-b-[10px] before:border-b-white'>
        <p className=''>{user?.emailAddresses[0].emailAddress}</p>
        <div className='flex flex-col gap-1 mt-3'>
          {/* <Link href='/dashboard/seller' className='text-black/65'>
            Seller Dashboard
          </Link> */}
          <Link href='/dashboard' className='text-black/65'>
            Go to Dashboard
          </Link>
        </div>
        <button className='text-white py-1 px-5 bg-red-500 rounded-md hover:bg-red-600 mt-5 w-full flex justify-center'>
          <SignOutButton />
        </button>
      </PopoverContent>
    </Popover>
  );
};
export default UserBtn;
