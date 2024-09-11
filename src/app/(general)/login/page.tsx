'use client';

import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginFormRequired } from '@/lib/schema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';

const LoginPage = () => {
  const form = useForm<z.infer<typeof loginFormRequired>>({
    resolver: zodResolver(loginFormRequired),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof loginFormRequired>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='my-10'>
      <MaxWidthWrapper>
        <header className='h-20 w-full'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href='/'
                  className='text-primary/80 hover:text-primary'
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className='text-gray-500'>Login</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='mt-3 text-2xl font-medium'>Login</h1>
        </header>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5 mt-10 w-full sm:w-3/5 lg:w-2/5 p-10 mx-auto shadow-lg border rounded-lg'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
            <p className='w-full text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='/register' className='text-blue-500'>
                Sign Up
              </Link>
            </p>
            <aside className='flex items-center gap-5'>
              <Separator className='border w-full' />
              <span>or</span>
              <Separator className='border w-full' />
            </aside>
          </form>
        </Form>
      </MaxWidthWrapper>
    </div>
  );
};
export default LoginPage;
