export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  original_price: number | null;
  on_sale: boolean;
  image_url: string;
  description: string;
  in_stock?: boolean;
  badge?: string;
  created_at?: string;
}

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image_url: string;
  size: string;
  qty: number;
}