'use client';

import { Heart } from 'lucide-react';
import { Button } from '../ui/button';

const AddToWishlistButton = () => {
  return (
    <Button
      // onClick={() => {
      // addToCart(product, product.id);
      // }}
      variant='outline'
      className='flex items-center gap-3'
    >
      <Heart size={16} />
      <span>Add to wishlist</span>
    </Button>
  );
};
export default AddToWishlistButton;
