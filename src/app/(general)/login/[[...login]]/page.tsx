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

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { loginFormSchema } from '@/lib/schema';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Link from 'next/link';
// import { Separator } from '@radix-ui/react-separator';
// import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
// import { useState } from 'react';
import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  // const [password, setPassword] = useState(false);

  // const form = useForm<z.infer<typeof loginFormSchema>>({
  //   resolver: zodResolver(loginFormSchema),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // });

  // function onSubmit(values: z.infer<typeof loginFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

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

          {/* <section className='text-center mt-12'>
            <h1 className='text-2xl font-medium'>Sign In</h1>
            <p className='text-gray-500 mt-1'>
              Sign in to get access to your account
            </p>
          </section> */}
        </header>

        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5 mt-16 w-full sm:w-3/5 lg:w-2/5 p-10 mx-auto shadow-lg border rounded-lg'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type='email' />
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
                  <FormLabel className='text-black'>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input {...field} type={password ? 'text' : 'password'} />
                      <button
                        type='button'
                        className='absolute right-3 top-1/2 -translate-y-1/2 h-full text-gray-600'
                        onClick={() => setPassword(!password)}
                      >
                        {password ? (
                          <EyeOpenIcon width={21} />
                        ) : (
                          <EyeClosedIcon width={21} />
                        )}
                      </button>
                    </div>
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
            <aside className='flex flex-col items-center gap-5'>
              
              <Separator className='mt-5 border w-full' />
              <p className='text-center text-gray-500'>
                By continuing, you agree to our{' '}
                <Link href='' className='text-blue-500'>
                  Terms and Conditions
                </Link>
                .
              </p>
              <Button
                variant='outline'
                className='flex items-center gap-2 text-[13px]'
              >
                Need help
                <span className='border border-primary rounded-full h-5 w-5 flex items-center justify-center'>
                  ?
                </span>
              </Button>
            </aside>
          </form>
        </Form> */}
        <section className='flex justify-center items-center'>
          <SignIn />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};
export default LoginPage;
