import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '../ui/button';
import { USD } from '@/lib/utils';
import { products } from '@/lib/data';

type Product = (typeof products)[number];

interface ListedProductsProperties {
  products: Product[];
}

const ListedProducts = ({ products }: ListedProductsProperties) => {
  return (
    <Carousel className='w-full '>
      <CarouselContent className='-ml-3'>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className='pl-3 md:basis-1/3 lg:basis-1/5'
          >
            <div className='border border-black/25'>
              <section className='flex flex-col aspect-square items-center justify-center h-[22rem] w-full gap-2'>
                <div className='h-4/5 w-full'>
                  <Image
                    src={product.img}
                    alt={`Image of ${product.name}`}
                    className='w-full h-full'
                  />
                </div>
                <div className='h-1/5 w-full'>
                  <p>{product.name}</p>
                  <p>{USD(product.price)}</p>
                  <Button>Add to cart</Button>
                </div>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default ListedProducts;
