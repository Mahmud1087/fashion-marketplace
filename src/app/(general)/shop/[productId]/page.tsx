'use client';

import BackButton from '@/components/common/back-button';
import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import { products } from '@/lib/data';
import { useStore } from '@/store/store';
import Image, { StaticImageData } from 'next/image';
import { useShallow } from 'zustand/react/shallow';

const SingleProductPage = ({
  params,
}: {
  params: { productId: number | string };
}) => {
  const { getSingleProductById } = useStore(
    useShallow((state) => ({
      getSingleProductById: state.getSingleProductById,
    }))
  );

  // const product = getSingleProductById(params.productId);
  const product = products.find((product) => product.id === params.productId);
  console.log(product);

  return (
    <MaxWidthWrapper>
      <header className='mt-6'>
        <BackButton />
      </header>
      {product && (
        <section>
          <div>
            <aside>
              <Image
                src={product?.img as StaticImageData}
                alt={`Image of ${product?.name}`}
              />
            </aside>
          </div>
          <div></div>
        </section>
      )}
    </MaxWidthWrapper>
  );
};
export default SingleProductPage;
