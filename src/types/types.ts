// === MainContent ===
// export interface IMainContentProps {
//   title: string;
// }

// === ProductCard ===
export interface IProds {
  id: number;
  name: string;
  model: string;
  price: string | number;
  img: string;
  alt: string;
  titleAppend?: string;
  titlePrepend?: string;
}
export interface IProductCardProps {
  product: IProds;
}

export interface IClickCounterProps {
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
  price: string | number;
  count: number;
}

export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: string;
}

export interface IWeatherWidgetProps {
  apiKey: string;
  lat: string;
  lon: string;
}

export interface IWeatherData {
  name?: string;
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
  clouds?: {
    all: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}
