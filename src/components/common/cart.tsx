import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import emptyCart from '~/public/emptyCart.png';

const Cart = () => {
  const cartItemCount = [];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary' className='flex gap-2 items-center'>
          <ShoppingCart size={18} />
          <span className='hidden sm:block'>Cart</span>
          <span className='text-white bg-primary rounded-full h-5 w-5 text-xs flex items-center justify-center'>
            {cartItemCount.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className='sm:max-w-xl'>
        <h1 className='text-xl flex gap-3 items-center'>
          Cart
          <span className='text-white bg-primary rounded-full h-6 w-6 text-sm font-bold flex items-center justify-center'>
            {cartItemCount.length}
          </span>
        </h1>

        <Separator className='my-3 border-b border-black/5' />

        <div className='h-full w-full'>
          {cartItemCount.length === 0 ? (
            <div className='h-full w-full flex flex-col gap-3 items-center justify-center'>
              <div className='w-56 h-56'>
                <Image
                  src={emptyCart}
                  alt='Empty Cart Icon'
                  className='w-full h-full'
                />
              </div>
              <h1 className='text-xl italic text-center'>
                Oops😢, your cart is empty
              </h1>
            </div>
          ) : (
            <div>Not empty</div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Cart;
