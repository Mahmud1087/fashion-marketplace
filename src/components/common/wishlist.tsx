'use client';

import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import Image from 'next/image';
import { USD } from '@/lib/utils';

const Wishlist = () => {
  const { wishLists, removeFromList, resetList, addToCart } = useStore(
    useShallow((state) => ({
      wishLists: state.wishLists,
      resetList: state.resetList,
      removeFromList: state.removeFromList,
      addToCart: state.addToCart,
    }))
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary' className='relative'>
          <Heart size={18} />
          <span className='absolute -top-2 -right-1 text-white bg-rose-800 rounded-full h-5 w-5 text-xs flex items-center justify-center'>
            {wishLists.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className='sm:max-w-md w-[85%]'>
        <section className='flex items-center justify-between'>
          <h1 className='text-xl flex gap-3 items-center'>
            WishLists
            <span className='text-white bg-primary rounded-full h-6 w-6 text-sm font-bold flex items-center justify-center'>
              {wishLists.length}
            </span>
          </h1>
          {wishLists.length !== 0 && (
            <Button variant='destructive' className='mr-6' onClick={resetList}>
              Clear list
            </Button>
          )}
        </section>

        <Separator className='my-3 border-b border-black/5' />

        <div className='h-full w-full'>
          {wishLists.length === 0 ? (
            <div className='h-full w-full flex flex-col gap-3 items-center justify-center'>
              {/* <div className='w-56 h-56'>
                <Image
                  src={emptyCart}
                  alt='Empty Cart Icon'
                  className='w-full h-full'
                />
              </div> */}
              <h1 className='text-xl italic text-center'>
                Oops😢, you don&apos;t have anything in your wishlist
              </h1>
            </div>
          ) : (
            <div className='flex flex-col gap-4 h-full'>
              <div className='flex flex-col h-[62%] overflow-x-hidden overflow-y-scroll cart-scrollbar transition-all'>
                {wishLists.map((product) => {
                  return (
                    <section
                      key={product.id}
                      className='flex items-center justify-between py-4 first:pt-2 border-b'
                    >
                      <div className='flex items-center gap-5'>
                        <aside className='h-16 w-16 sm:h-16 sm:w-16'>
                          <Image
                            src={product.img}
                            alt='Product image'
                            className='h-full w-full aspect-square rounded-md border shadow'
                          />
                        </aside>
                        <aside className='flex flex-col gap-2'>
                          <h1 className='font-medium text-base'>
                            {product.name.length > 10
                              ? `${product.name.slice(0, 10)}...`
                              : product.name}
                          </h1>
                          <div className='flex gap-3 items-center font-medium sm:hidden'>
                            <span>{USD(product.price)}</span>
                            <button
                              className='px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/75 lg:hidden'
                              onClick={() => {
                                addToCart(product, product.id);
                              }}
                            >
                              <ShoppingCart size={16} />
                            </button>
                          </div>
                          <Button
                            className='hidden w-fit lg:block'
                            onClick={() => {
                              addToCart(product, product.id);
                            }}
                          >
                            <ShoppingCart size={16} />
                          </Button>
                        </aside>
                      </div>
                      <div className='flex items-center gap-6'>
                        <p className='hidden font-medium sm:block'>
                          {USD(product.price)}
                        </p>
                        <Button
                          variant='ghost'
                          onClick={() => {
                            removeFromList(product.id);
                          }}
                        >
                          <Trash2 className='text-red-500' size={18} />
                        </Button>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Wishlist;
