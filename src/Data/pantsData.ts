import essentail from 'Assets/images/products/pants/essential/essential.webp';
import essentail2 from 'Assets/images/products/pants/essential/essential2.webp';
import essentail3 from 'Assets/images/products/pants/essential/essential3.webp';
import corduroy from 'Assets/images/products/pants/corduroy/corduroy.webp';
import corduroy2 from 'Assets/images/products/pants/corduroy/corduroy2.webp';
import corduroy3 from 'Assets/images/products/pants/corduroy/corduroy3.webp';
import { ProductCategories } from 'App/types/types';

export const pantsData = [
  {
    id: 'essential-cargo-pants-black',
    title: {
      en: 'ESSENTIAL - CARGO PANTS - BLACK',
      ua: 'ESSENTIAL - КАРГО ШТАНИ - ЧОРНІ',
    },
    price: 82.0,
    description: {
      en: `Congratulations to the slightly improved cut and exciting new colors of our important series...

			We've also added some nice details to make these pants special - custom metal zips, black metal rivets and micro pleats at the knees to create a shape. 100% Cotton Ripstop.
			
			Jason wears a size large. He is 5 feet 10 (178 cm) tall and weighs 176 pounds (80 kg).`,
      ua: `Вітаємо з дещо покращеним вирізом і новим захоплюючим кольорами нашої важливої серії...

			Ми також додали гарні деталі, щоб зробити ці штани особливими – спеціальні металеві застібки-блискавки, чорні металеві заклепки та мікроскладки на колінах, щоб створити форму. 100% бавовна Ripstop.
			
			Джейсон носить великий розмір. Його зріст 5 футів 10 (178 см) і вага 176 фунтів (80 кг).`,
    },
    imgs: [essentail, essentail2, essentail3],
    sizeList: [
      { size: 'XS - W 26-28', quantity: 3 },
      { size: 'S - W 29-31', quantity: 3 },
      { size: 'M - W 32-34', quantity: 3 },
      { size: 'L - W 34-36', quantity: 3 },
      { size: 'XL - W 36-38', quantity: 0 },
      { size: 'XXL - W 38-40', quantity: 1 },
    ],
    category: ProductCategories.PANTS,
  },
  {
    id: 'corduroy-straight-leg-pants-cream',
    title: {
      en: 'CORDUROY - STRAIGHT LEG PANTS - CREAM',
      ua: 'CORDUROY - ПРЯМІ ШТАНИ - КРЕМ',
    },
    price: 94.0,
    description: {
      en: `Made just the way we like it, the pants have a loose, straight fit with adjustable elastic cuffs if you like them more secure around the ankles. Our lightweight velvet is made from 97% cotton and 3% spandex with just the right amount of stretch for any style of movement. Dark maroon/gold label on the side and gold metal trim to give the pants a luxurious feel.

			Valtteri wear a large size. He is 5'9 (175cm) tall and weighs 150lbs (68kg).`,
      ua: `Пошиті саме так, як ми любимо, штани мають вільний крій прямого крою з регульованими еластичними манжетами, якщо вам подобається, що вони більш надійні навколо щиколоток. Наш легкий вельвет складається з 97% бавовни та 3% спандексу з необхідною кількістю пружності для будь-якого стилю руху. Темно-бордовий/золотий ярлик збоку та золота обробка металевих частин, щоб надати штанам розкоші.

			Валттері носить великий розмір. Його зріст 5 футів 9 (175 см) і вага 150 фунтів (68 кг).`,
    },
    imgs: [corduroy, corduroy2, corduroy3],
    sizeList: [
      { size: 'XS - W 26-28', quantity: 3 },
      { size: 'S - W 29-31', quantity: 3 },
      { size: 'M - W 32-34', quantity: 3 },
      { size: 'L - W 34-36', quantity: 0 },
      { size: 'XL - W 36-38', quantity: 1 },
      { size: 'XXL - W 38-40', quantity: 5 },
    ],
    category: ProductCategories.PANTS,
  },
];
