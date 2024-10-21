import { CartSlice } from '@/store/cart-slice';
import { ProductSlice } from '@/store/products-slice';

export type Store = CartSlice & ProductSlice;
