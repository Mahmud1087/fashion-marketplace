'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Save } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z
    .string()
    .min(100, { message: 'Must be at least 100 characters' })
    .max(300, { message: 'Maximum number of characters reached' }),
  price: z.union([
    z.number().min(1, { message: 'price must be greater than zero' }),
    z.string().min(1, { message: 'price must be greater than zero' }),
  ]),
  mainCategory: z.string().min(1, { message: 'Select category' }),
  subCategory: z.string().min(1, { message: 'Select sub-category' }),
  // image: z
  //   .any()
  //   .refine((files) => files?.length >= 1, { message: 'Image is required.' })
  //   .refine(
  //     (files) =>
  //       ['image/jpeg', 'image/png', 'image/jpg'].includes(files?.[0]?.type),
  //     { message: '.jpg, .jpeg, and .png files are accepted.' }
  //   )
  //   .refine((files) => files?.[0]?.size >= 5000000, {
  //     message: `Max file size is 5MB.`,
  //   }),
  image: z.any(),
  color: z.string(),
  size: z.string(),
  quantityInStock: z.union([
    z.number().min(1, { message: 'must be greater than zero' }),
    z.string().min(1, { message: 'must be greater than zero' }),
  ]),
  isDiscount: z.string().min(1, { message: 'select an option' }),
  discountPercentage: z.union([
    z.number().min(1, { message: 'must be greater than or equal to zero' }),
    z.string().min(1, { message: 'must be greater than or equal to zero' }),
  ]),
  shippingFee: z.union([
    z.number().min(0, { message: 'must be greater than or equal to zero' }),
    z.string().min(0, { message: 'must be greater than or equal to zero' }),
  ]),
});

const CreateProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      mainCategory: '',
      subCategory: '',
      // image: '',
      color: '',
      size: '',
      quantityInStock: 0,
      isDiscount: '',
      discountPercentage: 0,
      shippingFee: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  return (
    <div className='mt-8'>
      <h1 className='font-medium text-2xl capitalize'>
        {form.watch('name') === '' ? '[Untitled]' : form.watch('name')}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 my-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Product Name <span className='text-red-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Product Description <span className='text-red-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    {...field}
                    className='bg-white resize-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Price in USD <span className='text-red-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input type='number' {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='mainCategory'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='bg-white'>
                      <SelectValue placeholder='Select category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='men'>Men</SelectItem>
                    <SelectItem value='women'>Women</SelectItem>
                    <SelectItem value='kids'>Kids</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch('mainCategory') !== '' && (
            <FormField
              control={form.control}
              name='subCategory'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='bg-white'>
                        <SelectValue placeholder='Select sub-category' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='t-shirts'>T-shirts</SelectItem>
                      <SelectItem value='bags'>Bags</SelectItem>
                      <SelectItem value='trousers'>Trousers</SelectItem>
                      <SelectItem value='accessories'>Accessories</SelectItem>
                      <SelectItem value='shoes'>Shoes</SelectItem>
                      <SelectItem value='caps'>Caps</SelectItem>
                      <SelectItem value='others'>Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Product Image <span className='text-red-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type='file'
                    {...field}
                    className='bg-white flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 file:appearance-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='quantityInStock'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Quantity in stock <span className='text-red-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input type='number' {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col items-center gap-4 w-full sm:flex-row'>
            <div className='w-full sm:w-1/2'>
              <FormField
                control={form.control}
                name='color'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
                    <FormControl>
                      <Input {...field} className='bg-white w-full' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-full sm:w-1/2'>
              <FormField
                control={form.control}
                name='size'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='bg-white'>
                          <SelectValue placeholder='Select size' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='xs'>XS</SelectItem>
                        <SelectItem value='s'>S</SelectItem>
                        <SelectItem value='m'>M</SelectItem>
                        <SelectItem value='l'>L</SelectItem>
                        <SelectItem value='xl'>XL</SelectItem>
                        <SelectItem value='xxl'>XXL</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 w-full sm:flex-row'>
            <div className='w-full sm:w-1/2'>
              <FormField
                control={form.control}
                name='isDiscount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Any Discount? <span className='text-red-500'>*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='bg-white'>
                          <SelectValue placeholder='Select' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='yes'>Yes</SelectItem>
                        <SelectItem value='no'>Not at the moment</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {form.watch('isDiscount') === 'yes' && (
              <div className='w-full sm:w-1/2'>
                <FormField
                  control={form.control}
                  name='discountPercentage'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount Percentage (5 = 5%)</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          {...field}
                          className='bg-white w-full'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          <FormField
            control={form.control}
            name='shippingFee'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Fee</FormLabel>
                <FormControl>
                  <Input type='number' {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <aside className='w-full flex justify-end items-center'>
            <Button type='submit' className='flex items-center gap-2'>
              <span>Save</span>
              <Save size={18} />
            </Button>
          </aside>
        </form>
      </Form>
    </div>
  );
};
export default CreateProductForm;
