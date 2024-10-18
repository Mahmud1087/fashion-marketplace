'use client';

import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';
import { useEffect } from 'react';

type ChangeQtyButtonsProperties = {
  productId: number | string;
};

const ChangeQtyButtons = ({ productId }: ChangeQtyButtonsProperties) => {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      (state) => state.cartProducts,
      (products) => {
        setTotal(
          products.reduce((acc, prod) => acc + prod.price * prod.qty, 0)
        );
      },
      { fireImmediately: true }
    );

    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className='flex items-center gap-3'>
          <button
            onClick={() => decQty(product.id)}
            className='px-2 py-1 bg-secondary rounded border shadow-sm focus:outline-none'
          >
            <Minus className='' size={13} />
          </button>
          <p className='font-medium'>{product.qty}</p>
          <button
            onClick={() => incQty(product.id)}
            className='px-2 py-1 bg-secondary rounded border shadow-sm focus:outline-none'
          >
            <Plus className='' size={13} />
          </button>
        </div>
      )}
    </>
  );
};
export default ChangeQtyButtons;
