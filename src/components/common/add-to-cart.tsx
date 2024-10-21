'use client';

import { Product } from '@/types/product';
import { Button } from '../ui/button';
import { useStore } from '@/store/store';
import { ShoppingCart } from 'lucide-react';

type AddToCartButtonProperties = {
  product: Product;
};

const AddToCartButton = ({ product }: AddToCartButtonProperties) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <Button
      onClick={() => {
        addToCart(product, product.id);
      }}
      className='flex items-center gap-3'
    >
      <ShoppingCart size={16} />
      <span>Add to cart</span>
    </Button>
  );
};
export default AddToCartButton;
