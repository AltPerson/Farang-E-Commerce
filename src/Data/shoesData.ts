import shoes from 'Assets/images/products/shoes/elevateLight/shoes.webp';
import shoes2 from 'Assets/images/products/shoes/elevateLight/shoes2.webp';
import shoes3 from 'Assets/images/products/shoes/elevateLight/shoes3.webp';

import shoes1 from 'Assets/images/products/shoes//elevate/shoes1.webp';
import shoes1_2 from 'Assets/images/products/shoes//elevate/shoes2.webp';
import shoes1_3 from 'Assets/images/products/shoes//elevate/shoes3.webp';
import { ProductCategories } from 'App/types/types';

export const shoesData = [
  {
    id: 'elevate-light-shoe-black',
    title: {
      en: 'ELEVATE LIGHT - SHOE - BLACK',
      ua: 'ELEVATE LIGHT - КРОСІВКИ - ЧОРНІ',
    },
    price: 93.5,
    description: {
      en: 'The lightweight successor to the original Elevate Light features a new breathable knit upper for comfort, but retains the same great midsole and outsole. Reinforced with rubber around high stress areas, the Elevate Light is built for work.',
      ua: 'Легкий спадкоємець оригіналу Elevate Light має новий дихаючий трикотажний верх для комфорту, але зберігає ту саму чудову середню частину та зовнішню підошву. Посилений гумою навколо зон високого навантаження, Elevate Light створений для роботи.',
    },
    imgs: [shoes, shoes2, shoes3],
    sizeList: [
      { size: 'EU38 - US5.5 - UK5 - 24.1cm', quantity: 1 },
      { size: 'EU40 - US7 - UK6.5 - 25.5cm', quantity: 0 },
      { size: 'EU42 - US8.5 - UK8 - 26.8cm', quantity: 2 },
      { size: 'EU44 - US10 - UK9.5 - 28.1cm', quantity: 2 },
      { size: 'EU46 - US11.5 - UK11 - 29.5cm', quantity: 2 },
    ],
    category: ProductCategories.SHOES,
  },
  {
    id: 'elevate-farang-shoe',
    title: { en: 'ELEVATE - SHOE - BLACK', ua: 'ELEVATE - КРОСІВКИ - ЧОРНІ' },
    price: 76.5,
    description: {
      en: `The wait is over. ELEVATE shoes were developed by parkour athletes. It took us two years to create for two reasons:


			1. We had never made shoes before and had to figure out what the hell we were doing.
			2. We wanted to do really, really, really good work.
			
			Having been in parkour for over a decade, we've seen the good, the bad and the ugly shoes come and go. We distilled what made our favorite products so great and combined all the ingredients into one product. We called our first shoe ELEVATE because it helps you lift. Of course, this name has more meaning.`,
      ua: `Очікування закінчилося. Взуття ELEVATE було розроблено спортсменами для паркуру. На створення нам знадобилося два роки з двох причин:


		1. Ми ніколи раніше не виготовляли взуття, і нам довелося зрозуміти, що в біса ми робимо.
		2. Ми хотіли зробити справді дуже дуже гарну роботу.
		
		Займаючись паркуром більше десяти років, ми бачили, як хороше, погане та потворне взуття приходить і зникає. Ми дистилювали те, що зробило наші улюблені продукти такими чудовими, і об’єднали всі інгредієнти в один продукт. Ми назвали наше перше взуття ELEVATE, тому що воно допоможе вам піднятися. Звичайно, ця назва має більше значення.`,
    },
    imgs: [shoes1, shoes1_2, shoes1_3],
    sizeList: [
      { size: 'EU38 - US5.5 - UK5 - 24.1cm', quantity: 3 },
      { size: 'EU40 - US7 - UK6.5 - 25.5cm', quantity: 1 },
      { size: 'EU42 - US8.5 - UK8 - 26.8cm', quantity: 0 },
      { size: 'EU44 - US10 - UK9.5 - 28.1cm', quantity: 5 },
      { size: 'EU46 - US11.5 - UK11 - 29.5cm', quantity: 5 },
    ],
    category: ProductCategories.SHOES,
  },
];
