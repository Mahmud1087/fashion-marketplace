'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { cn } from '@/lib/utils';

const DesktopFilteringOption = () => {
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
  const menCategories = [
    'T-shirts',
    'Trousers',
    'Caps',
    'Accessories',
    'Bags',
    'Shoes',
  ];
  const womenCategories = [
    'Dress',
    'Trousers',
    'Caps',
    'Accessories',
    'Bags',
    'Shoes',
  ];
  const kidsCategories = [
    'T-shirts',
    'Dress',
    'Trousers',
    'Caps',
    'Accessories',
    'Bags',
    'Shoes',
  ];

  const [selectedRange, setSelectedRange] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMenCategories, setSelectedMenCategories] = useState<string[]>(
    []
  );
  const [selectedWomenCategories, setSelectedWomenCategories] = useState<
    string[]
  >([]);
  const [selectedKidsCategories, setSelectedKidsCategories] = useState<
    string[]
  >([]);

  // Function to toggle selection in an array
  const toggleSelection = (
    item: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    selected: string[]
  ) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Function to handle the slider change for price range
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRange(parseInt(e.target.value, 10));
  };
  return (
    <div className='border rounded-md p-5 shadow'>
      <div className='mb-6'>
        <h2 className='text-lg font-medium mb-1'>Category</h2>
        <hr className='border-t w-full' />
        <div className='flex gap-2 flex-wrap'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='men' className='border-b-0'>
              <AccordionTrigger className='pb-1 font-normal'>
                Men
              </AccordionTrigger>
              <AccordionContent className='pt-2'>
                {menCategories.map((category) => (
                  <label key={category} className='flex items-center space-x-2'>
                    <input
                      type='checkbox'
                      checked={selectedMenCategories.includes(category)}
                      onChange={() =>
                        toggleSelection(
                          category,
                          setSelectedMenCategories,
                          selectedMenCategories
                        )
                      }
                      className='form-checkbox text-blue-600'
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='women' className='border-b-0'>
              <AccordionTrigger className='py-1 font-normal'>
                Women
              </AccordionTrigger>
              <AccordionContent className='pt-2'>
                {womenCategories.map((category) => (
                  <label key={category} className='flex items-center space-x-2'>
                    <input
                      type='checkbox'
                      checked={selectedWomenCategories.includes(category)}
                      onChange={() =>
                        toggleSelection(
                          category,
                          setSelectedWomenCategories,
                          selectedWomenCategories
                        )
                      }
                      className='form-checkbox text-blue-600'
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='kids' className='border-b-0'>
              <AccordionTrigger className='py-1 font-normal'>
                Kids
              </AccordionTrigger>
              <AccordionContent className='pt-2'>
                {kidsCategories.map((category) => (
                  <label key={category} className='flex items-center space-x-2'>
                    <input
                      type='checkbox'
                      checked={selectedKidsCategories.includes(category)}
                      onChange={() =>
                        toggleSelection(
                          category,
                          setSelectedKidsCategories,
                          selectedKidsCategories
                        )
                      }
                      className='form-checkbox text-blue-600'
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <hr className='border-t w-full mt-4' /> */}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className='mb-6 mt-8'>
        <h2 className='text-lg font-medium'>Price</h2>
        <hr className='border-t w-full mt-1 mb-4' />
        <p className='mb-4 text-gray-500'>
          Showing prices in the range {priceRanges[selectedRange]}
        </p>
        <input
          type='range'
          min='0'
          max={priceRanges.length - 1}
          value={selectedRange}
          onChange={handleSliderChange}
          className='w-full cursor-pointer'
        />
        <div className='flex justify-between w-full mt-2 text-xs text-gray-600'>
          <span>{priceRanges[0]}</span>
          <span>{priceRanges[priceRanges.length - 1]}</span>
        </div>
      </div>

      {/* Size Filter */}
      <div className='mb-6 mt-8'>
        <h2 className='text-lg font-medium mb-2'>Size</h2>
        <hr className='border-t w-full mt-1 mb-4' />
        <div className='flex gap-2'>
          {sizes.map((size) => (
            <label key={size} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={selectedSizes.includes(size)}
                onChange={() =>
                  toggleSelection(size, setSelectedSizes, selectedSizes)
                }
                className='form-checkbox text-blue-600 appearance-none'
              />
              <span
                className={cn(
                  'px-2 border bg-secondary py-1 rounded transition-all shadow cursor-pointer',
                  {
                    'bg-black text-white shadow-none':
                      selectedSizes.includes(size),
                  }
                )}
              >
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className='mb-6 mt-8'>
        <h2 className='text-lg font-medium mb-2'>Color</h2>
        <hr className='border-t w-full mt-1 mb-4' />
        <div className='flex gap-2 flex-wrap'>
          {colors.map((color) => (
            <label key={color} className='flex items-center'>
              <input
                type='checkbox'
                checked={selectedColors.includes(color)}
                onChange={() =>
                  toggleSelection(color, setSelectedColors, selectedColors)
                }
                className='form-checkbox text-blue-600 appearance-none'
              />
              <span
                className={cn(
                  'px-2 border bg-secondary py-1 rounded transition-all cursor-pointer',
                  {
                    'bg-black text-white': selectedColors.includes(color),
                  }
                )}
              >
                {color}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DesktopFilteringOption;
