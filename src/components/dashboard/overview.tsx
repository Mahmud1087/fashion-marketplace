import { cn, USD } from '@/lib/utils';
import {
  ArrowDown,
  CircleDollarSign,
  Folders,
  User,
  UsersRound,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

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

const salesRev = [
  {
    month: 'Jan',
    amount: 3455,
  },
  {
    month: 'Feb',
    amount: 4656,
  },
  {
    month: 'Mar',
    amount: 4529,
  },
  {
    month: 'Apr',
    amount: 7412,
  },
  {
    month: 'May',
    amount: 9321,
  },
  {
    month: 'Jun',
    amount: 2354,
  },
  {
    month: 'Jul',
    amount: 5566,
  },
  {
    month: 'Aug',
    amount: 2156,
  },
  {
    month: 'Sep',
    amount: 3258,
  },
  {
    month: 'Oct',
    amount: 5214,
  },
  {
    month: 'Nov',
    amount: 6235,
  },
  {
    month: 'Dec',
    amount: 14256,
  },
];

const Overview = () => {
  return (
    <div>
      <header className='text-lg mb-7 sm:text-xl sm:hidden'>Overview</header>
      <section>
        <div className='mt-6 grid gap-4 sm:grid-cols-3'>
          <DashboardTopCard />
        </div>

        <div className='flex flex-col gap-6 lg:flex-row'>
          <aside className='w-full lg:w-[65%] '>
            <div className='pt-6 pb-20 px-4 h-96 w-full rounded-md border shadow-lg mt-8 sm:px-10 sm:shadow-xl lg:h-[30rem]'>
              <div className='mb-5'>
                <aside className='flex items-center justify-between'>
                  <h1 className='text-base'>Revenue</h1>
                  <span className='flex items-center gap-2 text-xs rounded-full px-2 py-1 bg-secondary text-gray-500'>
                    This year <ArrowDown size={15} />
                  </span>
                </aside>
                <p className='text-green-500 text-lg'>{USD(14256)}</p>
              </div>
              <SalesRevenue />
            </div>
          </aside>
          <aside className='h-[30rem] w-full border shadow-md mb-4 py-3 px-4 lg:w-[35%] rounded-xl overflow-y-scroll cart-scrollbar lg:mt-8'>
            <Activity />
          </aside>
        </div>
        <div className='w-full'>Others</div>
      </section>
    </div>
  );
};

const DashboardTopCard = () => {
  return (
    <>
      {overviewCards.map((card) => (
        <div
          key={card.text}
          className={cn(
            'flex flex-col gap-2 border shadow-md w-full rounded-lg'
          )}
        >
          <div className='p-5'>
            <h3 className='text-gray-600'>{card.text}</h3>
            <aside className='flex justify-between items-center'>
              <p className='text-primary font-medium text-base'>{card.value}</p>
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
    </>
  );
};

const SalesRevenue = () => {
  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={salesRev}
          margin={{
            top: 20,
            // right: 20,
            left: -20,
            bottom: 5,
          }}
          barSize={20}
        >
          <CartesianGrid />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey='amount'
            name='Amount'
            fill='hsl(var(--primary)/0.8)'
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill='hsl(var(--primary))' />}
          />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

const Activity = () => {
  const activityData = [
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
    {
      img: '',
      name: 'John Smith',
      product: 'Male bag',
    },
  ];

  return (
    <>
      <header className='flex items-center justify-between'>
        <h1 className='text-base'>Activities</h1>
        <Button variant={'link'}>View All</Button>
      </header>
      <Separator className='border-t mb-4' />
      <div className='flex flex-col gap-4 mb-6'>
        {activityData.map((item, i) => {
          return (
            <section key={i} className='flex gap-3 items-center'>
              <span className='h-12 w-12 rounded-full flex items-center justify-center bg-secondary'>
                <User color='blue' size={18} />
              </span>
              <div className='flex flex-col'>
                <h3 className='text-gray-900 text-sm font-medium'>
                  {item.name}
                </h3>
                <p className='text-gray-500 italic'>
                  Purchased{' '}
                  <span className='text-primary font-medium'>
                    {item.product}
                  </span>
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Overview;
