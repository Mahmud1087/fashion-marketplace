import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const SearchField = ({ className }: { className: string }) => {
  return (
    <form action='' className={cn('w-52 lg:w-80', className)}>
      <label
        htmlFor='search'
        className='flex items-center justify-between bg-secondary rounded-md pr-3'
      >
        <Input
          type='search'
          placeholder='Search products...'
          className='border-none bg-transparent'
        />
        <Search size={18} className='text-gray-600' />
      </label>
    </form>
  );
};
export default SearchField;
