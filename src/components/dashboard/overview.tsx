import { cn, USD } from '@/lib/utils';
import { CircleDollarSign, Folders, UsersRound } from 'lucide-react';

const overviewCards = [
  {
    text: 'Total Sales',
    value: USD(5245),
    color: 'text-green-500',
    icon: <CircleDollarSign size={20} />,
    percent: 7,
  },
  {
    text: 'Total Customers',
    value: 567,
    color: 'text-blue-500',
    icon: <UsersRound size={20} />,
    percent: 7,
  },
  {
    text: 'Total Orders',
    value: 2356,
    color: 'text-orange-500',
    icon: <Folders size={20} />,
    percent: 3.5,
  },
];

const Overview = () => {
  return (
    <div>
      <header className='text-lg mb-7 sm:text-xl sm:hidden'>Overview</header>
      <section>
        <div className='mt-6 grid gap-4 sm:grid-cols-3'>
          {overviewCards.map((card) => (
            <div
              key={card.text}
              className={cn(
                'flex flex-col gap-2 border shadow-md w-full rounded-lg'
              )}
            >
              <div className='p-5'>
                <h3 className='text-base text-gray-500'>{card.text}</h3>
                <aside className='flex justify-between items-center'>
                  <p className='text-primary font-medium'>{card.value}</p>
                  <div
                    className={cn(
                      'h-10 w-10 rounded-full bg-white border shadow-lg border-black/10 flex items-center justify-center',
                      card.color
                    )}
                  >
                    {card.icon}
                  </div>
                </aside>
                <p className='text-gray-500'>
                  <span className={cn('font-medium text-green-500')}>
                    {card.percent}%
                  </span>{' '}
                  vs last month
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Overview;
