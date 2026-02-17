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
export interface IProds {
  id: string | number,
  name: string,
  model: string,
  price: string,
  img: string,
  alt: string,
  titleAppend?: string,
  titlePrepend?: string,
}
export interface IProductCardProps {
  product: IProduct;
  statusDark: boolean;
}

export interface IClickCounterProps {
  statusDark: boolean;
}

export interface IArticleProps {
  id?: string | number;
  img: string;
  heading: string;
  text: string;
}