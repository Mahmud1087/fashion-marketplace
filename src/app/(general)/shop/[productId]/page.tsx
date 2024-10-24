import AddToCartButton from '@/components/common/add-to-cart';
import AddToWishlistButton from '@/components/common/add-to-wishlist';
import BackButton from '@/components/common/back-button';
import Heading from '@/components/common/heading';
import ListedProducts from '@/components/common/listedProducts';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import StarReview from '@/components/common/star-review';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/lib/data';
import { cn, USD } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import {
  Facebook,
  Instagram,
  Linkedin,
  Star,
  Twitter,
  User,
} from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

const SingleProductPage = ({ params }: { params: { productId: number } }) => {
  const productId =
    typeof params.productId === 'string'
      ? Number(params.productId)
      : params.productId;

  const product = products.find((product) => product.id === productId);
  const category = product?.category;

  const similarProducts = products.filter((prod) => prod.category === category);

  return (
    <MaxWidthWrapper>
      <header className='mt-6'>
        <BackButton />
      </header>
      {product && (
        <section>
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
                  <AddToWishlistButton product={product} />
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

          {/* Other images here */}

          <section className='my-24 flex flex-col gap-6 sm:flex-row'>
            <div className='w-full sm:w-[45%]'>
              <header className='flex items-center'>
                <h1 className='relative text-xl mb-6 text-black/70 after:absolute after:w-1/2 after:h-[2px] after:bg-primary/65 after:left-0 after:-bottom-1 after:rounded-full'>
                  Product Information
                </h1>
              </header>
              <aside className='sm:pl-5'>
                <div>
                  {/* <h1 className='text-black/50'>Descriptions:</h1> */}
                  <p>{product.description}</p>
                </div>
              </aside>
            </div>

            <div className='w-full sm:w-[10%] flex justify-center'>
              <Separator className='border-r' />
            </div>

            <div className='w-full sm:w-[45%]'>
              <header className='flex items-center mb-10 '>
                <h1 className='relative text-xl text-black/70 after:absolute after:w-1/2 after:h-[2px] after:bg-primary/65 after:left-0 after:-bottom-1 after:rounded-full'>
                  Customers Review
                </h1>
              </header>

              {/* <p>Showing 5 reviews of {product.noOfReviews} total reviews</p> */}

              <Carousel className='w-full'>
                <CarouselContent className='ml-0'>
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <CarouselItem
                        key={item}
                        className='border p-6 rounded-xl'
                      >
                        <p className='text-black/65 text-center'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Id ea ex doloribus esse quod repellendus alias
                          ad corporis dolor ipsa laboriosam, soluta corrupti vel
                          tempora. Sit illum placeat ad veritatis?
                        </p>
                        <div className='flex justify-center mt-5 gap-2'>
                          <Star
                            size={16}
                            className='text-yellow-600 fill-yellow-600'
                          />
                          <Star
                            size={16}
                            className='text-yellow-600 fill-yellow-600'
                          />
                          <Star
                            size={16}
                            className='text-yellow-600 fill-yellow-600'
                          />
                          <Star
                            size={16}
                            className='text-yellow-600 fill-yellow-600'
                          />
                          <Star size={16} className='text-yellow-600' />
                        </div>
                        <div className='mt-6 flex items-center gap-4'>
                          <div className='h-16 w-16 rounded-full border flex items-center justify-center shadow'>
                            <User />
                          </div>
                          <aside>
                            <h3 className='font-semibold'>John Doe</h3>
                            <p className='font-light italic text-black/55'>
                              Medical Doctor
                            </p>
                          </aside>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Button className='mt-5 bg-black text-primary-foreground hover:bg-black/75'>
                Add a review
              </Button>
            </div>
          </section>

          <div className='w-full mt-28'>
            {/* <header className='flex items-center mb-10 '>
              <h1 className='relative text-xl text-black/70 after:absolute after:w-1/2 after:h-[2px] after:bg-primary/65 after:left-0 after:-bottom-1 after:rounded-full'>
                Similar Products
              </h1>
            </header> */}
            <Heading title='Similar Products' />
            <ListedProducts
              products={
                similarProducts.length > 10
                  ? similarProducts.slice(0, 10)
                  : similarProducts
              }
            />
          </div>
        </section>
      )}
    </MaxWidthWrapper>
  );
};
export default SingleProductPage;
