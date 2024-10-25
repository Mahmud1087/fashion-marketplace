'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant='outline'
      className='flex gap-2 items-center shadow-md w-fit'
      onClick={router.back}
    >
      <ArrowLeft size={17} strokeWidth={3} />
    </Button>
  );
};
export default BackButton;
