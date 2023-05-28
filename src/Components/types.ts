export interface ProductProps {
  _id: string;
  category: string;
  brand: string;
  title: string;
  price: number;
  rating: number;
  totalRating: number;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
  inStock: number;
  newestArrival: boolean;
  delivery: string;
  description: string[];
  qty: number;
}
