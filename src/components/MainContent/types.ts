import type { CSSProperties } from 'vue';

// === MainContent ===
export interface IMainContentProps {
  title: string;
  themeStylesSection: CSSProperties;
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
}
