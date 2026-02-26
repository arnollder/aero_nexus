// === MainContent ===
export interface IMainContentProps {
  title: string;
  statusDark: boolean;
}

// === ProductCard ===
export interface IProds {
  id: number;
  name: string;
  model: string;
  price: string;
  img: string;
  alt: string;
  titleAppend?: string;
  titlePrepend?: string;
}
export interface IProductCardProps {
  product: IProds;
  statusDark: boolean;
}

export interface IClickCounterProps {
  statusDark: boolean;
  product: IProds;
}

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface INewsProps {
  article: IData;
  statusDark: boolean;
}

export interface INewsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
  export interface ICartItem {
    id: number;
    name: string;
    model: string;
    price: string;
    count: number;
  }