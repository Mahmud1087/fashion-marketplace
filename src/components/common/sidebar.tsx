import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Logo from './logo';
import { Separator } from '../ui/separator';
import Navlinks from './navlinks';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary' className='block sm:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <div className='my-4'>
          <Separator />
        </div>
        <section className='mt-10 flex flex-col gap-6'>
          <Navlinks />

          <aside className='flex items-center justify-center gap-3 mt-8'>
            <Button variant='ghost' asChild className='text-lg'>
              <Link href='/faq'>Faqs</Link>
            </Button>
            <Separator
              orientation='vertical'
              className='h-5 border border-gray-300'
            />
            <Button variant='ghost' className='flex items-center gap-2 text-lg'>
              <span className='border border-primary rounded-full h-5 w-5 flex items-center justify-center'>
                ?
              </span>
              Need help
            </Button>
          </aside>
        </section>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
