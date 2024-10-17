import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn, USD } from '@/lib/utils';
import { products } from '@/lib/data';
import Link from 'next/link';

type Product = (typeof products)[number];

interface ListedProductsProperties {
  products: Product[];
  isFeatured?: boolean;
}

const ListedProducts = ({ products, isFeatured }: ListedProductsProperties) => {
  return (
    <Carousel className='w-full '>
      <CarouselContent className='-ml-3 pr-12 sm:-ml-4 sm:pr-32 lg:-ml-3 lg:pr-12'>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className='pl-3 sm:pl-4 md:basis-1/2 lg:basis-1/4 lg:pl-3 pb-10 pt-2'
          >
            <div className='shadow-lg rounded-lg relative'>
              <article className='absolute top-0 w-full bg-transparent flex justify-between rounded-t-lg z-10'>
                {product.isNew && (
                  <h1 className='bg-teal-600 px-3 py-2 first:rounded-tl-lg text-white font-medium'>
                    New
                  </h1>
                )}
                {product.isDiscounted && (
                  <h1 className='bg-orange-400 px-3 last:rounded-tr-lg first:rounded-tl-lg py-2 text-white font-medium'>
                    {product.discountPercentage}% OFF
                  </h1>
                )}
                {!product.isNew && product.isBestSeller && isFeatured && (
                  <h1 className='bg-blue-950 px-3 py-2 last:rounded-tr-lg text-white font-medium'>
                    Best Seller
                  </h1>
                )}
              </article>

              <section className='flex flex-col aspect-square items-center justify-center w-full'>
                <Link
                  href={`/${product.name}`}
                  className='h-72 w-full rounded-t-lg shadow relative overflow-hidden group'
                >
                  <Image
                    src={product.img}
                    alt={`Image of ${product.name}`}
                    className='w-full h-full rounded-t-lg'
                  />
                  <aside className='absolute top-0 left-0 w-full h-full cursor-pointer bg-black/50 opacity-0 transition-all flex items-center justify-center text-white/85 text-lg group-hover:opacity-100'>
                    View Details
                  </aside>
                </Link>
                <div className='shadow rounded-lg border-t-0 w-full pb-4 pt-2 px-4 flex flex-col gap-2'>
                  <p className='font-medium text-lg'>
                    {product.name.length > 20
                      ? `${product.name.slice(0, 20)}...`
                      : product.name}
                  </p>
                  <aside className='flex gap-4'>
                    <p
                      className={cn(
                        'font-medium',
                        product.isDiscounted &&
                          'line-through decoration-red-600 text-black/60'
                      )}
                    >
                      {USD(product.price)}
                    </p>
                    {product.isDiscounted && (
                      <p className='font-medium '>
                        {USD(
                          (product.price * (100 - product.discountPercentage)) /
                            100
                        )}
                      </p>
                    )}
                  </aside>
                  <Button>Add to cart</Button>
                </div>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='border shadow-xl' />
      <CarouselNext className='border shadow-xl' />
    </Carousel>
  );
};
export default ListedProducts;
