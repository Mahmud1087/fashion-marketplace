import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';

import { createCartSlice } from './cart-slice';
import { createProductSlice } from './products-slice';

import { Store } from '@/types/store';
import { combineSlices } from '@/lib/helper';
import { createWishListSlice } from './wishlist-slice';

export const useStore = create<Store>()(
  subscribeWithSelector(
    immer(
      combineSlices(createCartSlice, createProductSlice, createWishListSlice)
    )
  )
);
