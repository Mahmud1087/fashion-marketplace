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
// import { registerFormSchema } from '@/lib/schema';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Link from 'next/link';
// import { Separator } from '@radix-ui/react-separator';
// import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
// import { useState } from 'react';
import { SignUp } from '@clerk/nextjs';

const RegisterPage = () => {
  // const [password, setPassword] = useState(false);
  // const [cpassword, setCPassword] = useState(false);

  // const form = useForm<z.infer<typeof registerFormSchema>>({
  //   resolver: zodResolver(registerFormSchema),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     fullName: '',
  //   },
  // });

  // function onSubmit(values: z.infer<typeof registerFormSchema>) {
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
              <BreadcrumbPage className='text-gray-500'>
                Register
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          {/* <section className='text-center mt-12'>
            <h1 className='text-2xl font-medium'>Sign Up</h1>
            <p className='text-gray-500 mt-1'>
              Create an account to get access to our amazing an endless features
            </p>
          </section> */}
        </header>

        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5 mt-24 w-full sm:w-3/5 lg:w-2/5 p-10 mx-auto shadow-lg border rounded-lg sm:mt-16'
          >
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Confirm Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        {...field}
                        type={cpassword ? 'text' : 'password'}
                      />
                      <button
                        type='button'
                        className='absolute right-3 top-1/2 -translate-y-1/2 h-full text-gray-600'
                        onClick={() => setCPassword(!cpassword)}
                      >
                        {cpassword ? (
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
              Sign Up
            </Button>
            <p className='w-full text-center text-sm'>
              Already have an account?{' '}
              <Link href='/login' className='text-blue-500'>
                Sign In
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
          <SignUp />
        </section>
      </MaxWidthWrapper>
    </div>
  );
};
export default RegisterPage;
