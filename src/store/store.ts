import { Store } from '@/types/store';
import { create } from 'zustand';
import { createCartSlice } from './cart-slice';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';

export const useStore = create<Store>()(
  subscribeWithSelector(
    immer((...a) => ({
      ...createCartSlice(...a),
    }))
  )
);
