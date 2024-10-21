import AddToCartButton from '@/components/common/add-to-cart';
import AddToWishlistButton from '@/components/common/add-to-wishlist';
import BackButton from '@/components/common/back-button';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import StarReview from '@/components/common/star-review';
import { products } from '@/lib/data';
import { cn, USD } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

const SingleProductPage = ({ params }: { params: { productId: number } }) => {
  const productId =
    typeof params.productId === 'string'
      ? Number(params.productId)
      : params.productId;

  const product = products.find((product) => product.id === productId);

  return (
    <MaxWidthWrapper>
      <header className='mt-6'>
        <BackButton />
      </header>
      {product && (
        <section className='flex flex-col gap-6 items-center my-12 sm:flex-row'>
          <div className='w-full h-96 sm:w-1/2 sm:h-[30rem] shadow-md'>
            <Image
              src={product?.img as StaticImageData}
              alt={`Image of ${product?.name}`}
              className='w-full h-full'
            />
          </div>
          <div className='w-full h-full sm:w-1/2'>
            <h1 className='text-2xl mb-2 font-medium'>{product.name}</h1>
            <div className='flex items-center justify-between sm:justify-normal sm:gap-4'>
              <StarReview />
              <span>({product.noOfReviews} of customer reviews)</span>
            </div>
            <aside className='mt-5 flex gap-2 text-lg lg:text-base'>
              {product.isDiscounted && (
                <p className='font-medium '>
                  {USD(
                    (product.price * (100 - product.discountPercentage)) / 100
                  )}
                </p>
              )}
              <p
                className={cn(
                  'font-medium text-lg lg:text-base',
                  product.isDiscounted &&
                    'line-through decoration-red-600 text-black/60 text-sm lg:text-sm'
                )}
              >
                {USD(product.price)}
              </p>
            </aside>

            <Separator className='border-b my-5' />

            <p>{product.description}</p>

            <Separator className='border-b my-5' />

            <aside className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <AddToCartButton product={product} />
                <AddToWishlistButton />
              </div>
              <div></div>
            </aside>
            <p className='font-medium mb-2'>
              Category:{' '}
              <span className='font-normal text-black/65'>
                {product.category}
              </span>
            </p>
            <p className='font-medium mb-2'>
              Availability:{' '}
              <span className='font-normal text-black/65'>
                {product.isAvailable ? 'In stock' : 'Out of stock'}
              </span>
            </p>

            <Separator className='border-b my-5' />

            <div className='flex items-center gap-6'>
              <p>Share this product</p>
              <aside className='flex items-center gap-2'>
                <a
                  href=''
                  className='h-8 w-8 rounded-full bg-gray-50 shadow-md flex items-center justify-center transition-all border hover:shadow'
                >
                  <Facebook size={16} strokeWidth={1} />
                </a>
                <a
                  href=''
                  className='h-8 w-8 rounded-full bg-gray-50 shadow-md flex items-center justify-center transition-all border hover:shadow'
                >
                  <Instagram size={16} strokeWidth={1} />
                </a>
                <a
                  href=''
                  className='h-8 w-8 rounded-full bg-gray-50 shadow-md flex items-center justify-center transition-all border hover:shadow'
                >
                  <Linkedin size={16} strokeWidth={1} />
                </a>
                <a
                  href=''
                  className='h-8 w-8 rounded-full bg-gray-50 shadow-md flex items-center justify-center transition-all border hover:shadow'
                >
                  <Twitter size={16} strokeWidth={1} />
                </a>
              </aside>
            </div>
          </div>
        </section>
      )}
    </MaxWidthWrapper>
  );
};
export default SingleProductPage;
