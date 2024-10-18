import { CartProduct } from '@/types/cart-product';
import { Product } from '@/types/product';
import { StateCreator } from 'zustand';

type CartState = {
  cartProducts: CartProduct[];
  totalPrice: number;
};

type CartActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number | string) => void;
  incQty: (producId: number | string) => void;
  decQty: (producId: number | string) => void;
  getProductById: (productId: number | string) => CartProduct | undefined;
  setTotal: (total: number) => void;
  reset: () => void;
};

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  cartProducts: [],
  totalPrice: 0,
};

export const createCartSlice: StateCreator<
  CartSlice,
  [['zustand/immer', never]],
  [],
  CartSlice
> = (set, get) => ({
  ...initialState,
  incQty: (productId) =>
    set((state) => {
      const foundProduct = state.cartProducts.find(
        (product) => product.id === productId
      );
      if (foundProduct) {
        foundProduct.qty += 1;
      }
    }),
  decQty: (productId) =>
    set((state) => {
      const foundProduct = state.cartProducts.find(
        (product) => product.id === productId
      );
      if (foundProduct) {
        if (foundProduct.qty <= 1) foundProduct.qty = 1;
        else foundProduct.qty -= 1;
      }
    }),
  addToCart: (product) =>
    set((state) => {
      state.cartProducts.push({ ...product, qty: 1 });
    }),
  removeFromCart: (productId) =>
    set((state) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== productId
      );
    }),
  getProductById: (productId) =>
    get().cartProducts.find((product) => product.id === productId),
  setTotal: (totalPrice) =>
    set((state) => {
      state.totalPrice = totalPrice;
    }),
  reset: () => set(() => initialState),
});
