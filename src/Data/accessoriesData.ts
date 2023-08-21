import sticker from 'Assets/images/products/accessories/sticker/sticker.webp';
import sticker2 from 'Assets/images/products/accessories/sticker/sticker2.webp';
import sticker3 from 'Assets/images/products/accessories/sticker/sticker3.webp';
import gift from 'Assets/images/products/accessories/gift/gift.webp';
import gift2 from 'Assets/images/products/accessories/gift/gift2.webp';
import gift3 from 'Assets/images/products/accessories/gift/gift3.webp';
import pin from 'Assets/images/products/accessories/pin/pin.webp';
import pin2 from 'Assets/images/products/accessories/pin/pin2.webp';
import pin3 from 'Assets/images/products/accessories/pin/pin3.webp';
import { ProductCategories } from 'App/types/types';

export const accessoriesData = [
  {
    id: 'farang-gold-sticker-pack',
    title: {
      en: 'SIMPLICITY - STICKER PACK - (GOLD)',
      ua: 'SIMPLICITY - НАБІР НАЛІПОК - (ЗОЛОТО)',
    },
    price: 3.4,
    description: {
      en: `We've taken some of our favorite designs and created some new ones for this sticker pack! Comes as a single A4 shot with different sizes for your laptop, phone or face. I don't know why you put them on your face, but once you get them, it's cool to get creative.
			We like to put them on objects we care about because they make them look even more like ours.`,
      ua: `
		Ми взяли деякі з наших улюблених дизайнів і створили кілька нових для цього набору наклейок! Доставляється як одна зйомка формату A4 із різними розмірами для вашого ноутбука, телефону чи обличчя. Я не знаю, навіщо ви наносите їх на своє обличчя, але як тільки ви їх отримаєте, це круто проявити творчість.
		Ми любимо розміщувати їх на об’єктах, які нам важливі, тому що вони ще більше схожі на наші.
		`,
    },
    imgs: [sticker, sticker2, sticker3],
    category: ProductCategories.ACCESSORIES,
  },
  {
    id: 'gift-card',
    title: { en: 'FARANG - GIFT - CARD', ua: 'FARANG - ПОДАРУНОК - КАРТА' },
    price: 50.0,
    description: {
      en: `Are you shopping for someone else but don't know what to get them? Give them the gift of their choice with a Farang Clothing Gift Card.

			Gift cards are attached via email and instructions are included at checkout. You can use these download links if you want to print a gift card.
			
			Our gift cards do not incur an additional processing fee. Gift cards are valid for one year after purchase.`,
      ua: `
		Ви робите покупки для когось іншого, але не знаєте, що йому подарувати? Зробіть їм подарунок на вибір за допомогою подарункової картки Farang Clothing.

		Подарункові картки доставляються електронною поштою та містять інструкції щодо їх використання під час оплати. Ви можете скористатися цим посиланням для завантаження, якщо хочете роздрукувати листівку для подарунка.
		
		Наші подарункові картки не стягують додаткових комісій за обробку. Подарункові картки дійсні протягом одного року після покупки.
		`,
    },
    imgs: [gift, gift2, gift3],
    category: ProductCategories.ACCESSORIES,
  },
  {
    id: 'essential-pin-set',
    title: { en: 'ESSENTIAL - PIN SET', ua: 'ESSENTIAL - НАБІР ШПИЛЬОК' },
    price: 24.65,
    description: {
      en: `A set of enamel pins that can be stuck on a shirt, backpack or anything else you can think of. You will receive a fabric bag with 4 different pin designs. We recommend removing your shirt before using the pin.`,
      ua: `Набір емальованих шпильок, які можна наклеїти на сорочку, рюкзак або будь-що інше, що ви придумаєте. Ви отримаєте тканинну сумку з 4 різними дизайнами шпильок. Ми рекомендуємо зняти сорочку, перш ніж використовувати шпильку.`,
    },
    imgs: [pin, pin2, pin3],
    category: ProductCategories.ACCESSORIES,
  },
];
