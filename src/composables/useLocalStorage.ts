import type { IProds } from '@/components/MainContent/types';

interface ICartItem {
  id: number;
  name: string;
  model: string;
  price: string;
  count: number;
}

export function useLocalStorage() {
  const saveToLocalStorage = (product: IProds, count: number) => {
    // получаю массив объектов из localStorage или создаю пустой массив
    const getCart = localStorage.getItem('cart');
    const cart: ICartItem[] = getCart ? JSON.parse(getCart) : [];

    // создаю объект для добавления в массив
    const newItem: ICartItem = {
      id: product.id,
      name: product.name,
      model: product.model,
      price: product.price,
      count: count,
    };    
    
    // сохраняю новый объект в localStorage
    if (count >= 1) {
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  
  return {
    saveToLocalStorage
  };
}