import { ProductCategories } from 'App/types/types';
import goat from 'Assets/images/products/longSleeve/goat/goat.webp';
import goat2 from 'Assets/images/products/longSleeve/goat/goat2.webp';
import goat3 from 'Assets/images/products/longSleeve/goat/goat3.webp';
import patchwork from 'Assets/images/products/longSleeve/patchwork/patchwork.jpg';
import patchwork2 from 'Assets/images/products/longSleeve/patchwork/patchwork2.webp';
import patchwork3 from 'Assets/images/products/longSleeve/patchwork/patchwork3.jpg';

export const longSleeveData = [
  {
    id: 'g-o-a-t-longsleeve-black',
    title: {
      en: 'G.O.A.T - LONGSLEEVE TEE - STONE BLACK',
      ua: 'G.O.A.T - ЛОНГСЛІВ - ЧОРНИЙ КАМІНЬ',
    },
    price: 56.0,
    description: {
      en: `The lightweight successor to the original Elevate Light features a new breathable knit upper for comfort, but retains the same great midsole and outsole. Reinforced with elastic around the high stress area, the Elevate Light is built for work.`,
      ua: 'Легкий спадкоємець оригіналу Elevate Light має новий дихаючий трикотажний верх для комфорту, але зберігає ту саму чудову середню частину та зовнішню підошву. Посилений гумою навколо зон високого навантаження, Elevate Light створений для роботи.',
    },
    imgs: [goat, goat2, goat3],
    sizeList: [
      { size: 'XS', quantity: 4 },
      { size: 'S', quantity: 4 },
      { size: 'M', quantity: 0 },
      { size: 'L', quantity: 4 },
      { size: 'XL', quantity: 1 },
      { size: 'XXL', quantity: 4 },
    ],
    category: ProductCategories.LONGSLEEVE,
  },
  {
    id: 'stone-black-patchwork-hoodie-black',
    title: {
      en: 'PATCHWORK - HOODIE - STONE BLACK',
      ua: 'PATCHWORK - ТОЛСТОВКА - ЧОРНИЙ КАМІНЬ',
    },
    price: 99.0,
    description: {
      en: `In our designs, we want to combine practicality and aesthetics. The patchwork zip-up hoodie was created with the idea that when the inevitable destruction of clothes comes, they should only look better. Frayed patches that create the Farang symbol, massive patch pockets, and slashed cuffs and hem.

			We chose a zip-up hoodie so you can easily throw on his flower for a few extra layers for those slips and rolls. 100% cotton.
			
			Joe Scandrett wears size L.`,
      ua: `У наших дизайнах ми хочемо поєднувати практичність і естетику. Толстовка на блискавці в стилі печворк була створена з думкою про те, що коли настане неминуче руйнування одягу, вони повинні виглядати лише краще. Потерті нашивки, які створюють символ Farang, масивні накладні кишені, а також розрізані манжети та поділ.

		Ми вибрали худі на блискавці, щоб ви могли легко накинути його зверху на кілька додаткових шарів для цих ковзань і рулонів. 100% бавовна.
			
		Джо Скандретт носить розмір L.`,
    },
    imgs: [patchwork, patchwork2, patchwork3],
    sizeList: [
      { size: 'XS', quantity: 4 },
      { size: 'S', quantity: 4 },
      { size: 'M', quantity: 4 },
      { size: 'L', quantity: 4 },
      { size: 'XL', quantity: 1 },
      { size: 'XXL', quantity: 0 },
    ],
    category: ProductCategories.LONGSLEEVE,
  },
];
