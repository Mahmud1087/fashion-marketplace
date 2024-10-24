'use client';

import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { useStore } from '@/store/store';
import { Product } from '@/types/product';

type AddToWishlistButtonProperties = {
  product: Product;
};

const AddToWishlistButton = ({ product }: AddToWishlistButtonProperties) => {
  const addtoList = useStore((state) => state.addtoList);

  return (
    <Button
      onClick={() => {
        addtoList(product, product.id);
      }}
      variant='outline'
      className='flex items-center gap-3'
    >
      <Heart size={16} />
    </Button>
  );
};
export default AddToWishlistButton;
