import { products } from '@/lib/data';
import { Product } from '@/types/product';
import { StateCreator } from 'zustand';

type ProductsState = {
  products: Product[];
};

type ProductsActions = {
  getSingleProductById: (productId: number | string) => Product | undefined;
};

export type ProductSlice = ProductsState & ProductsActions;

const initialState: ProductsState = {
  products: products,
};

export const createProductSlice: StateCreator<
  ProductSlice,
  [['zustand/immer', never]],
  [],
  ProductSlice
> = (set, get) => ({
  ...initialState,
  getSingleProductById: (productId) =>
    get().products.find((product) => product.id === productId),
});
