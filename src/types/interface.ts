export interface ProductOption {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  options: ProductOption[];
}

export interface Order {
  id: number;
  title: string;
  price: number;
  options: ProductOption[];
  quantity: number;
}
