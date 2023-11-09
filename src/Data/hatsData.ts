import globe from 'Assets/images/products/hats/globe/globe.webp';
import globe2 from 'Assets/images/products/hats/globe/globe2.webp';
import globe3 from 'Assets/images/products/hats/globe/globe3.webp';
import wire from 'Assets/images/products/hats/wire/wire.webp';
import wire2 from 'Assets/images/products/hats/wire/wire2.webp';
import wire3 from 'Assets/images/products/hats/wire/wire3.webp';
import shady from 'Assets/images/products/hats/shady/shady.webp';
import shady2 from 'Assets/images/products/hats/shady/shady2.webp';
import shady3 from 'Assets/images/products/hats/shady/shady3.webp';
import essential from 'Assets/images/products/hats/essential/essential.webp';
import essential2 from 'Assets/images/products/hats/essential/essential2.webp';
import essential3 from 'Assets/images/products/hats/essential/essential3.webp';
import { ProductCategories } from 'App/types/types';

export const hatsData = [
  {
    id: 'globe-hat-black',
    title: { en: 'GLOBE - HAT - (BLACK)', ua: 'GLOBE - КАПЕЛЮХ - (ЧОРНА)' },
    price: 31.45,
    description: {
      en: `Про що ти думаєш? Світові подорожі, світовий мир, світове панування? О, хлопче... у нас є продукт для вас?

		Залишаючи жахливі жарти, цей 5-панельний дизайн має принт глобуса, етикетку Farang спереду, шкіряний ремінець із тисненням і докладні етикетки всередині. Насолоджуйтесь!`,
      ua: `What are you thinking about? World travel, world peace, world domination? Oh boy...do we have the product for you?

			Keeping horror jokes at bay, this 5-panel design features a globe print, a Farang label on the front, an embossed leather strap and detailed labels in the middle. Enjoy!`,
    },
    imgs: [globe, globe2, globe3],
    category: ProductCategories.HATS,
  },
  {
    id: 'winter-2019-beanie',
    title: {
      en: 'WIRE - BEANIE - BLACK',
      ua: `WIRE - ШАПКА - ЧОРНА`,
    },
    price: 25.2,
    description: {
      en: `I know, I know... Winter is not our favorite season either. We want to like a good hat, and maybe putting it on is an extra motivation to go and knock down a few jumps, even if the conditions aren't ideal.

			Design features include Farang label and barbed wire embroidery.`,
      ua: `Знаю, знаю... Зима теж не наша улюблена пора року. Хоча нам подобається гарна шапка, і, можливо, її надягання є додатковою мотивацією піти та зробити кілька стрибків, навіть якщо умови не ідеальні.

		Особливостями дизайну є етикетка Farang і вишивка колючим дротом.`,
    },
    imgs: [wire, wire2, wire3],
    category: ProductCategories.HATS,
  },
  {
    id: 'bucket-hats',
    title: {
      en: 'SHADY - BUCKET HAT - BLACK',
      ua: 'SHADY - КАПЕЛЮХ ВІДРО - ЧОРНИЙ',
    },
    price: 33.15,
    description: {
      en: `Valtteri and Anan kept showing up in bucket hats, so we thought it was worth at least getting our logo across the top of one. This way we can spot them from afar. We haven't lost them since.

			Made of 100% cotton. Tree logo (as you probably guessed). Farang cotton label on front.`,
      ua: `Валттері та Анан постійно з’являлися в капелюхах-відрах, тож ми подумали, що варто принаймні розмістити наш логотип на верхній частині одного. Таким чином ми можемо помітити їх здалеку. Відтоді ми їх не втрачали.

			Виготовлений зі 100% бавовни. Логотип зверху (як ви, напевно, здогадалися). Бавовняна етикетка Farang спереду.`,
    },
    imgs: [shady, shady2, shady3],
    category: ProductCategories.HATS,
  },
  {
    id: 'beanies',
    title: {
      en: 'ESSENTIAL - BEANIE - BLACK',
      ua: 'ESSENTIAL - ШАПКА - ЧОРНА',
    },
    price: 32.3,
    description: {
      en: `First and foremost: The Essential Beanie protects you from mind-reading aliens. Other than that, it's a great beanie hat with a snug but comfortable fit, and you'll have to work really hard to get it off your head.

			This beanie is made from 100% acrylic fabric with a cashmere feel (cashmere is such a buzzword) and features a Farang logo patch on the front. One size fits most.`,
      ua: `Перш за все: Essential Beanie захищає вас від прибульців, які читають думки. Крім того, це чудова шапка-біні з щільною, але зручною посадкою, і вам доведеться дуже постаратися, щоб вона злетіла з вашої голови.

	Ця шапочка виготовлена зі 100% акрилової тканини з відчуттям кашеміру (кашемір – це таке модне слово) і має нашивку з логотипом Farang спереду. Один розмір підходить більшості.`,
    },
    imgs: [essential, essential2, essential3],
    category: ProductCategories.HATS,
  },
];
