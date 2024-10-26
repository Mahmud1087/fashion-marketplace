'use client';

import { USD } from '@/lib/utils';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import StarReview from './star-review';
import { ShoppingCart } from 'lucide-react';
import { useStore } from '@/store/store';

type ProductCardProperties = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProperties) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className='border shadow'>
      <div className='h-48 border-b relative group md:h-60'>
        {/* <Link href={`/shop/${product.id}`} className='h-full'>
          <Image
            src={product.img}
            alt='Product Image'
            className='w-full h-full'
          />
        </Link> */}
        <Image
          src={product.img}
          alt={`Image of ${product.name}`}
          className='w-full h-full'
        />
        <Link
          href={`/shop/${product.id}`}
          className='absolute top-0 left-0 w-full h-full cursor-pointer bg-black/50 opacity-0 transition-all flex items-center justify-center text-white text-base group-hover:opacity-100'
        >
          <span className=''>View Product details</span>
        </Link>
      </div>
      <aside className='mt-3 px-3'>
        <p className='text-sm'>
          <span className='md:hidden'>
            {product.name.length > 15
              ? `${product.name.slice(0, 15)}...`
              : product.name}
          </span>
          <span className='hidden md:block'>
            {product.name.length > 20
              ? `${product.name.slice(0, 20)}...`
              : product.name}
          </span>
        </p>
        <p className='text-gray-500 mt-1 sm:mb-2'>{USD(product.price)}</p>
        <div className='mb-4 flex justify-between items-center'>
          <StarReview />
          <button
            className='px-2 py-1 border shadow text-primary rounded bg-secondary focus:outline-none focus:border-none'
            onClick={() => {
              addToCart(product, product.id);
            }}
          >
            <ShoppingCart size={15} fill='hsl(263.4 70% 50.4%)' />
          </button>
        </div>
      </aside>
    </div>
  );
};
export default ProductCard;
