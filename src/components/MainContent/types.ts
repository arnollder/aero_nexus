// === MainContent ===
export interface IMainContentProps {
  title: string;
  statusDark: boolean;
}

// === ProductCard ===
interface IProduct {
  name: string;
  model: string;
  price: string;
  img: string;
  alt: string;
}
export interface IProductCardProps {
  product: IProduct;
  statusDark: boolean;
}
