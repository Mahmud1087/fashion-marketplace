'use client';

import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useStore } from '@/store/store';

const SearchField = ({ className }: { className?: string }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = useStore((state) => state.onSearch);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form
      action=''
      onSubmit={handleSubmit}
      className={cn('w-52 lg:w-80', className)}
    >
      <label
        htmlFor='search'
        className='flex items-center justify-between bg-secondary/30 border rounded-md pr-3'
      >
        <Input
          type='search'
          name={searchTerm}
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search by name or category...'
          className='border-none bg-transparent'
        />
        <Search size={18} className='text-gray-600' />
      </label>
    </form>
  );
};
export default SearchField;
