'use client';

import MaxWidthWrapper from '@/components/common/max-width-wrapper';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react';

const FAQs = () => {
  const { user } = useUser();

  return (
    <MaxWidthWrapper className='my-12 mb-24'>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <h1>User Logged in</h1>
        <p>{user ? user.fullName : 'No user'}</p>
      </Authenticated>
      <AuthLoading>Still loading...</AuthLoading>
    </MaxWidthWrapper>
  );
};
export default FAQs;
