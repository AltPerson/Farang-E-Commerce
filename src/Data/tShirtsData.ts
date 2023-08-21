import tall from 'Assets/images/products/tShirts/tall/tall.webp';
import tall2 from 'Assets/images/products/tShirts/tall/tall2.webp';
import tall3 from 'Assets/images/products/tShirts/tall/tall3.webp';
import boss from 'Assets/images/products/tShirts/boss/boss.webp';
import boss2 from 'Assets/images/products/tShirts/boss/boss2.webp';
import boss3 from 'Assets/images/products/tShirts/boss/boss3.webp';
import { ProductCategories } from 'App/types/types';

export const tShirtsData = [
  {
    id: 'farang-tall-tee-white',
    title: {
      en: 'TALL TEE - (WHITE ON BLACK)',
      ua: `ВИСОКА ФУТБОЛКА - (БІЛЕ НА ЧОРНОМУ)`,
    },
    price: 37.4,
    description: {
      en: `Black tall t-shirt with a white low-cut FARANG print on the back. (Not a dress unless worn with a belt)

			X-Large: Length = 39 inches, Width = 23 inches
			
			Sean is wearing a size M. He is 5'9 (177 cm) tall and weighs 163 pounds (74 kg).`,
      ua: `Чорна висока футболка з білим низьким принтом FARANG на спині. (Не сукня, якщо не носити з поясом)

		X-Large: довжина = 39 дюймів, ширина = 23 дюйми
		
		Шон одягнений у розмір М. Його зріст 5'9 (177 см) і важить 163 фунти (74 кг).`,
    },
    imgs: [tall, tall2, tall3],
    sizeList: [
      { size: 'XS', quantity: 3 },
      { size: 'S', quantity: 3 },
      { size: 'M', quantity: 3 },
      { size: 'L', quantity: 1 },
      { size: 'XL', quantity: 2 },
      { size: 'XXL', quantity: 0 },
    ],
    category: ProductCategories.TSHIRTS,
  },
  {
    id: 'the-boss-tee-black-red',
    title: {
      en: 'THE BOSS - TEE - (BLACK/RED)',
      ua: 'THE BOSS - ФУТБОЛКА - (ЧОРНА/ЧЕРВОНА)',
    },
    price: 41.65,
    description: {
      en: `Cut and design inspired by the classics, because being the boss never goes out of style. Somewhere during our travels we gave Pasha the nickname "Boss" and it stuck. It later inspired some of our most famous videos and became its own attitude towards life. Now it's time to transfer it to the shirt design and here is the result.



			Made of 100% cotton. Detailed lettering on the back includes the iconic shot of Pasha exploring the Los Angeles River and the phrase "The game has changed, but the players are the same." This phrase came from the movie "McGruber". A parody of MacGyver of dubious value. For reasons unknown, this quote has become a part of our everyday conversations.
			
			
			
			As you can see, we had a good time creating this product, and I hope you enjoy it almost as much.
			
			Pasha wears a size L. He is 5'10 (178cm) tall and weighs 165lbs (75kg).`,
      ua: `Крій і дизайн, натхненні класикою, тому що бути босом ніколи не виходить з моди. Десь під час наших подорожей ми дали Паші прізвисько «Бос», і воно прижилося. Згодом це надихнуло на деякі з наших найвідоміших відео та стало власним ставленням до життя. Настав час перенести це на дизайн сорочки, і ось результат.



			Виготовлений зі 100% бавовни. Детальні написи на звороті включають культовий знімок Паші, який досліджує річку Лос-Анджелеса, і фразу «Гра змінилася, але гравці ті самі». Ця фраза пішла з фільму «МакГрубер». Пародія на MacGyver сумнівної цінності. З незрозумілих причин ця цитата стала частиною наших повсякденних розмов.
			
	
			
			Як ви бачите, ми добре провели час, створюючи цей продукт, і я сподіваюся, що він вам сподобається майже так само.
			
			Паша носить розмір L. Його зріст 5’10 (178 см) і вага 165 фунтів (75 кг).`,
    },
    imgs: [boss, boss2, boss3],
    sizeList: [
      { size: 'XS', quantity: 2 },
      { size: 'S', quantity: 2 },
      { size: 'M', quantity: 0 },
      { size: 'L', quantity: 1 },
      { size: 'XL', quantity: 7 },
      { size: 'XXL', quantity: 7 },
    ],
    category: ProductCategories.TSHIRTS,
  },
];

// {en:``,
// 	ua:``
// }
