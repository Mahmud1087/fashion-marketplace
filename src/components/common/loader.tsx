import { cn } from '@/lib/utils';

type LoaderProps = {
  className?: string;
};

const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={cn(
        'h-8 w-8 rounded-full border-2 border-t-0 border-b-0 border-primary animate-spin',
        className
      )}
    ></div>
  );
};
export default Loader;
