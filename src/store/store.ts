import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';

import { createCartSlice } from './cart-slice';
import { createProductSlice } from './products-slice';

// Import the Store type
import { Store } from '@/types/store';
import { combineSlices } from '@/lib/helper';

export const useStore = create<Store>()(
  subscribeWithSelector(
    immer(
      combineSlices(
        createCartSlice, // First slice (Cart)
        createProductSlice // Second slice (Products)
      )
    )
  )
);
