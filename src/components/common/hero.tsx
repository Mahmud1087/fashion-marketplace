'use client';

import Autoplay from 'embla-carousel-autoplay';
import heroImg1 from '~/public/hero-img1.jpg';
import heroImg2 from '~/public/hero-img2.jpg';
import heroImg3 from '~/public/hero-img3.jpg';
import heroImg4 from '~/public/hero-img4.jpg';
import heroImg5 from '~/public/hero-img5.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 6000 }));

  return (
    <div className='relative w-screen h-screen'>
      <Carousel
        plugins={[plugin.current]}
        className='absolute w-full h-full top-0 left-0'
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='w-screen h-screen'>
              <Image src={image} alt='Slider Image' className='w-full h-full' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute top-1/2 -translate-y-1/2 left-2 hover:bg-primary hover:border-none hover:text-white hover:font-bold lg:left-12' />
        <CarouselNext className='absolute top-1/2 -translate-y-1/2 right-2 hover:bg-primary hover:border-none hover:text-white hover:font-bold lg:right-12' />
      </Carousel>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-200/20 w-4/5 mx-auto backdrop-blur-md rounded-lg shadow-2xl px-6 py-12 sm:px-24 lg:w-[55%]'>
        <p className='text-center text-base text-orange-700 mb-3 font-medium'>
          WELCOME TO FASHMALL
        </p>
        <h1 className='text-center text-2xl text-black font-bold mb-10 sm:text-3xl lg:text-4xl'>
          Your <span>home</span> for high quality fashion items
        </h1>
        <div className='flex items-center justify-center w-full'>
          <Button className='text-lg flex gap-4 group transition-all'>
            <span>Get Started</span>
            <ArrowRight
              size={18}
              className='group-hover:translate-x-1 transition-all'
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
