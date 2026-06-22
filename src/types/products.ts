// types/products.ts
export type Product = {
  productId: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string; 
};