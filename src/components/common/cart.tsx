'use client';

import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import emptyCart from '~/public/emptyCart.png';
import { useStore } from '@/store/store';
import ChangeQtyButtons from './change-quantity-buttons';
import { USD } from '@/lib/utils';
import { useShallow } from 'zustand/react/shallow';

const Cart = () => {
  const { cartProducts, removeFromCart, cartTotal, reset } = useStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      removeFromCart: state.removeFromCart,
      cartTotal: state.totalPrice,
      reset: state.reset,
    }))
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary' className='flex gap-2 items-center'>
          <ShoppingCart size={18} />
          <span className='hidden sm:block'>Cart</span>
          <span className='text-white bg-primary rounded-full h-5 w-5 text-xs flex items-center justify-center'>
            {cartProducts.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className='sm:max-w-md'>
        <section className='flex items-center justify-between'>
          <h1 className='text-xl flex gap-3 items-center'>
            Cart
            <span className='text-white bg-primary rounded-full h-6 w-6 text-sm font-bold flex items-center justify-center'>
              {cartProducts.length}
            </span>
          </h1>
          {cartProducts.length !== 0 && (
            <Button variant='destructive' className='mr-6' onClick={reset}>
              Clear Cart
            </Button>
          )}
        </section>

        <Separator className='my-3 border-b border-black/5' />

        <div className='h-full w-full'>
          {cartProducts.length === 0 ? (
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
            <div className='flex flex-col gap-4 h-full'>
              <div className='flex flex-col h-[62%] overflow-x-hidden overflow-y-scroll cart-scrollbar transition-all'>
                {cartProducts.map((product) => {
                  return (
                    <section
                      key={product.id}
                      className='flex items-center justify-between py-4 first:pt-2 border-b'
                    >
                      <div className='flex items-center gap-5'>
                        <aside className='h-16 w-16'>
                          <Image
                            src={product.img}
                            alt='Product image'
                            className='h-full w-full aspect-square rounded-md border shadow'
                          />
                        </aside>
                        <aside className='flex flex-col gap-2'>
                          <h1 className='text-lg font-medium lg:text-base'>
                            {product.name}
                          </h1>
                          <ChangeQtyButtons productId={product.id} />
                        </aside>
                      </div>
                      <div className='flex items-center gap-6'>
                        <p className='font-medium'>{USD(product.price)}</p>
                        <Button
                          variant='ghost'
                          onClick={() => {
                            removeFromCart(product.id);
                          }}
                        >
                          <Trash2 className='text-red-500' size={18} />
                        </Button>
                      </div>
                    </section>
                  );
                })}
              </div>
              <section className='h-[28%] border-t pt-4 pb-2 flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-base'>Shipping</p>
                  <p className='font-medium'>Free</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-base'>Transaction Fee</p>
                  <p className='font-medium'>{USD(Number(1))}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-base'>Total</p>{' '}
                  <p className='font-medium'>{USD(Number(cartTotal))}</p>
                </div>
                <Button className=''>Proceed to checkout</Button>
              </section>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Cart;
