export interface SliderData {
  img: string;
  title: string;
  txt: string;
}

interface SizeData {
  size: string;
  quantity: number;
}

export enum ProductCategories {
  ALL = 'all',
  ACCESSORIES = 'accessories',
  HATS = 'hats',
  LONGSLEEVE = 'longSleeve',
  PANTS = 'pants',
  SHOES = 'shoes',
  SHORTS = 'shorts',
  SOCKS = 'socks',
  TSHIRTS = 'tShirts',
}

export type LanguagesTypes = {
  en: string;
  ua: string;
};

export interface ProductsData {
  id: string;
  title: LanguagesTypes;
  price: number;
  description: LanguagesTypes;
  imgs: string[];
  category: ProductCategories;
  sizeList?: SizeData[];
}

export interface ProductItem {
  id: string;
  title: LanguagesTypes;
  img: string;
  size: string;
  price: number;
  quantity: number;
  category: string;
}

export type TProductCategories = {
  [C in ProductCategories]: string;
};
export type TotalData<T extends TProductCategories> = {
  [key in keyof T]: ProductsData[];
};
