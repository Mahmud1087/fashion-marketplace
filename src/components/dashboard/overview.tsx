import { cn, USD } from '@/lib/utils';
import {
  ArrowDown,
  CircleDollarSign,
  Folders,
  Info,
  Star,
  User,
  UsersRound,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  XAxis,
} from 'recharts';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import img from '~/public/Fashionable and Popular Men Star Decor Round Charm Layered Necklace Stainless Steel for Jewelry Gift and for a Stylish Look.jpeg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const overviewCards = [
  {
    text: 'Total Sales',
    value: USD(5245),
    color: 'text-green-500',
    icon: <CircleDollarSign size={20} />,
    percent: 12,
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
    percent: -3.5,
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
      <header className='text-lg mb-4 sm:text-xl sm:hidden'>Overview</header>
      <section>
        <div className='mt-4 grid gap-4 sm:mt-0 sm:grid-cols-3'>
          <DashboardTopCard />
        </div>

        <div className='flex flex-col gap-6 lg:flex-row'>
          <aside className='w-full lg:w-[65%] '>
            <div className='pt-6 pb-20 px-4 h-96 w-full rounded-xl border shadow-lg mt-4 bg-white sm:px-10 sm:shadow-xl lg:h-[30rem]'>
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
          <aside className='h-[30rem] w-full border shadow-md mb-4 py-3 px-4 lg:w-[35%] rounded-xl bg-white overflow-y-scroll cart-scrollbar lg:mt-4'>
            <Activity />
          </aside>
        </div>
        <div className='w-full py-3 px-4 rounded-xl bg-white shadow-md my-4'>
          <TopProducts />
        </div>
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
            'flex flex-col gap-2 border shadow-md w-full rounded-lg bg-white'
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
              <span
                className={cn('font-medium', {
                  'text-green-500': card.percent > 0,
                  'text-red-500': card.percent < 0,
                })}
              >
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
  const chartConfig = {
    amount: {
      label: 'Amount of Sales',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

  return (
    <>
      <ChartContainer config={chartConfig} className='min-h-[17rem] w-full'>
        <BarChart
          accessibilityLayer
          data={salesRev}
          margin={{
            top: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} stroke='hsl(var(--muted))' />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            formatter={(value) => USD(value as number)}
            content={<ChartTooltipContent />}
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey='amount'
            name='Revenue'
            fill='hsl(var(--primary)/0.8)'
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill='hsl(var(--primary))' />}
          />
          <Legend />
        </BarChart>
      </ChartContainer>
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

const TopProducts = () => {
  const topProducts = [
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
    {
      img,
      name: 'Product',
      price: 120,
      sold: 500,
      stock: 1000,
      rating: 4.5,
    },
  ];

  return (
    <>
      <header className='flex items-center justify-between'>
        <h1 className='text-base sm:mb-10'>Top Products</h1>
        <p className='text-gray-400 italic sm:hidden'>showing top 10</p>
      </header>
      <Separator className='mb-4 mt-2 sm:hidden' />

      {/* desktop view */}
      <section className='hidden sm:block'>
        <Table>
          <TableCaption>Showing top 10 selling products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>s/n</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Price / unit</TableHead>
              <TableHead>Sold</TableHead>
              <TableHead className='text-right'>In-Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts.map((product, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className='w-[100px]'>{i + 1}</TableCell>
                  <TableCell className='flex items-center gap-2'>
                    <div className='h-12 w-12'>
                      <Image
                        src={product.img}
                        alt='Product image'
                        className='h-full w-full rounded-md'
                      />
                    </div>
                    <p>{product.name}</p>
                  </TableCell>
                  <TableCell>
                    <p className='flex items-center gap-2'>
                      <Star size={15} fill='orange' color='orange' />
                      <span>{product.rating}</span>
                    </p>
                  </TableCell>
                  <TableCell>{USD(product.price)}</TableCell>
                  <TableCell>{product.sold}</TableCell>
                  <TableCell className='text-right'>{product.stock}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>

      {/* mobile view */}
      <section className='flex flex-col gap-4 sm:hidden'>
        {topProducts.map((product, i) => {
          return (
            <>
              <div key={i} className='flex justify-between items-center'>
                <aside className='flex items-center gap-4'>
                  <div className='h-12 w-12'>
                    <Image
                      src={product.img}
                      alt='Product image'
                      className='h-full w-full rounded-md'
                    />
                  </div>
                  <h1>
                    {product.name} {i + 1}
                  </h1>
                </aside>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Info size={18} color='hsl(var(--primary))' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='mr-6 w-44 bg-secondary'>
                    <DropdownMenuItem className='w-full flex items-center justify-between'>
                      <p>Price:</p>
                      <p>{USD(product.price)}</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full flex items-center justify-between'>
                      <p>Rating:</p>
                      <p className='flex items-center gap-2'>
                        <Star size={15} fill='orange' color='orange' />
                        <span>{product.rating}</span>
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full flex items-center justify-between'>
                      <p>Sold:</p>
                      <p>{product.sold}</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full flex items-center justify-between'>
                      <p>In-Stock:</p>
                      <p>{product.stock} units</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Separator />
            </>
          );
        })}
      </section>
    </>
  );
};

export default Overview;
