'use client';

import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = ['Men', 'Women', 'Kids', 'Accessories', 'Bags', 'Shoes'];
const colors = [
  'Black',
  'Red',
  'Green',
  'Yellow',
  'Blue',
  'Cyan',
  'White',
  'Pink',
  'Wine',
  'Silver',
];

const priceRanges = [
  '$5.00-$15.00',
  '$15.00-$30.00',
  '$30.00-$50.00',
  '$50.00-$75.00',
  '$75.00-$100.00',
  '$100.00-$150.00',
  '$150.00-$200.00',
  '$200.00-$300.00',
  '$300.00-$500.00',
  '$500.00+',
];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const MobileFilteringOptions = () => {
  const [category, setCategory] = useState('');

  return (
    <form className='lg:hidden'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'secondary'} className='shadow border gap-3'>
            <Filter size={16} />
            <span className='font-medium'>Filter by</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='ml-5 mt-3 relative before:absolute before:left-3 before:-top-5 before:h-5 before:w-5 before:border-l-[10px] before:border-r-[10px] before:border-r-transparent before:border-l-transparent before:border-b-[10px] before:border-b-black/65'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className=''>Category</AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-wrap items-center justify-center gap-2'>
                  {categories.map((item) => {
                    return (
                      <li
                        key={item}
                        className={cn(
                          'px-3 border shadow-sm rounded-md py-1 bg-secondary transition-all',
                          {
                            'bg-primary text-white': category === item,
                          }
                        )}
                        onClick={() => setCategory(item)}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-wrap items-center justify-center gap-5'>
                  {priceRanges.map((price) => {
                    return <li key={price}>{price}</li>;
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-wrap items-center justify-center gap-5'>
                  {colors.map((col) => {
                    return <li key={col}>{col}</li>;
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-wrap items-center justify-center gap-5'>
                  {sizes.map((size) => {
                    return <li key={size}>{size}</li>;
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
    </form>
  );
};
export default MobileFilteringOptions;
