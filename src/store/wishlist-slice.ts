import { Product } from '@/types/product';
import { toast } from 'sonner';
import { StateCreator } from 'zustand';

type WishListState = {
  wishLists: Product[];
};

type WishListActions = {
  addtoList: (product: Product, productId: number | string) => void;
  removeFromList: (productId: number | string) => void;
  getWishlistById: (productId: number | string) => Product | undefined;
  resetList: () => void;
};

export type WishListSlice = WishListState & WishListActions;

const initialState: WishListState = {
  wishLists: [],
};

export const createWishListSlice: StateCreator<
  WishListSlice,
  [['zustand/immer', never]],
  [],
  WishListSlice
> = (set, get) => ({
  ...initialState,
  addtoList: (product, productId) =>
    set((state) => {
      const foundIndex = state.wishLists.findIndex(
        (product) => product.id === productId
      );

      if (foundIndex !== -1) {
        state.wishLists.splice(foundIndex, 1);
        toast('Product removed from wishlist', {
          position: 'top-center',
          style: {
            color: '#f44336',
          },
        });
      } else {
        state.wishLists.push(product);
        toast('Product added to wishlist', {
          position: 'top-center',
          style: {
            color: 'green',
          },
        });
      }
    }),
  removeFromList: (productId) =>
    set((state) => {
      state.wishLists = state.wishLists.filter(
        (product) => product.id !== productId
      );
      toast('Product deleted from wishlist', {
        position: 'top-right',
        style: {
          color: '#f44336',
        },
      });
    }),
  getWishlistById: (productId) =>
    get().wishLists.find((product) => product.id === productId),
  resetList: () =>
    set(() => {
      toast('Wishlist cleared', {
        position: 'top-right',
        style: {
          color: '#f44336',
        },
      });
      return initialState;
    }),
});
