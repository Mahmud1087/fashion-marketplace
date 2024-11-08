import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' className={cn('font-medium text-lg', className)}>
      FashMall
    </Link>
  );
};
export default Logo;
