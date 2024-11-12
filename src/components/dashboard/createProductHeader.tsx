// 'use client';

import BackButton from '../common/back-button';
import { Button } from '../ui/button';

const CreateProductHeader = () => {
  return (
    <header className='flex justify-between items-center'>
      <BackButton />
      <Button>Save</Button>
    </header>
  );
};
export default CreateProductHeader;
