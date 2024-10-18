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
  discountedPercentage: number;
  releaseDate: string;
  img: string;
};
