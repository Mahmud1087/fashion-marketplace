import { cn } from '@/lib/utils';

interface Properties {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Properties) => {
  return (
    <div className={cn('w-[90%] mx-auto sm:w-4/5', className)}>{children}</div>
  );
};
export default MaxWidthWrapper;
