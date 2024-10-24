import { CartSlice } from '@/store/cart-slice';
import { ProductSlice } from '@/store/products-slice';
import { WishListSlice } from '@/store/wishlist-slice';

export type Store = CartSlice & ProductSlice & WishListSlice;
