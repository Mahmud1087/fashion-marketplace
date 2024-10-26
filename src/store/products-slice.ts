import { products } from '@/lib/data';
import { Product } from '@/types/product';
import { StateCreator } from 'zustand';

type ProductsState = {
  products: Product[];
};

type ProductsActions = {
  getSingleProductById: (productId: number | string) => Product | undefined;
  onSearch: (searchTerm: string) => void;
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
  onSearch: (searchTerm) =>
    set((state) => {
      if (searchTerm === '') {
        state.products = products;
      } else {
        state.products = state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }),
});
