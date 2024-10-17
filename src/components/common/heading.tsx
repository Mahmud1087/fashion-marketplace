import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';

interface HeadingProperties {
  title: string;
}

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Heading = ({ title }: HeadingProperties) => {
  return (
    <div className='flex items-center mb-10'>
      <hr className='border border-black w-[20%] sm:w-[40%] mx-auto' />
      <h1
        className={cn(
          'text-4xl font-bold w-3/5 lg:w-[30%] text-center',
          dancingScript.className
        )}
      >
        {title}
      </h1>
      <hr className='border border-black w-[20%] sm:w-[40%] mx-auto' />
    </div>
  );
};
export default Heading;
