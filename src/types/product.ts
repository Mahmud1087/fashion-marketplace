import { StaticImageData } from 'next/image';

export type Product = {
  id: number | string;
  name: string;
  description: string;
  price: number;
  category: string;
  isFeatured: boolean;
  isNew: boolean;
  isDiscounted: boolean;
  isBestSeller: boolean;
  discountPercentage: number;
  releaseDate: string;
  img: StaticImageData;
};
