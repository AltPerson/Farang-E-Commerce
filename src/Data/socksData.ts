import noMistakes from 'Assets/images/products/socks/noMistakes/noMistakes.webp';
import noMistakes2 from 'Assets/images/products/socks/noMistakes/noMistakes2.webp';
import noMistakes3 from 'Assets/images/products/socks/noMistakes/noMistakes3.webp';
import base from 'Assets/images/products/socks/base/base.webp';
import base2 from 'Assets/images/products/socks/base/base2.webp';
import base3 from 'Assets/images/products/socks/base/base3.webp';
import { ProductCategories } from 'App/types/types';

export const socksData = [
  {
    id: 'summer-socks-black-orange-2020',
    title: {
      en: 'NO MISTAKES - SOCKS - BLACK/TANGERINE',
      ua: 'NO MISTAKES - ШКАРПЕТКИ - ЧОРНІ/МАНДАРИНОВІ',
    },
    price: 9.0,
    description: {
      en: `NO MISTAKES - only lucky occurrences'' is the orange text on your shin while wearing these socks. Broken shins, called "Shinjuries," are unfortunately an occurrence that every free runner is used to. These socks won't really protect you from a bad landing, but they will immediately remind you that there is a positive lesson to be found in any mistake. Many of our most creative tricks started out as mistakes or accidents, so stop crying and get to work!

			Pretty deep, I know. To balance our deep philosophical teachings, the remaining orange lines on the toe are completely nonsensical. We just thought they looked cool. Additionally, the upper part of the foot features the Farang text and logo. goodbye
			
			Made of 90% cotton and 10% spandex.`,
      ua: `«БЕЗ ПОМИЛОК – лише щасливі випадки» — це помаранчевий текст на вашій гомілці під час носіння цих шкарпеток. Розбиті гомілки, які називаються «Shinjuries», на жаль, є подією, до якої звик кожен фріраннер. Ці шкарпетки не дуже захистять вас від невдалого приземлення, але вони відразу нагадають вам, що в будь-якій помилці можна знайти позитивний урок. Багато з наших найкреативніших трюків почалися як помилки чи випадковості, тому перестаньте плакати та поверніться до роботи!

			Досить глибоко, я знаю. Щоб урівноважити наші глибокі філософські вчення, залишилися помаранчеві лінії на носку абсолютно безглузді. Ми просто подумали, що вони виглядають круто. Крім того, у верхній частині стопи є текст і логотип Farang. до побачення
			
			Виготовлений із 90% бавовни та 10% спандексу.`,
    },
    imgs: [noMistakes, noMistakes2, noMistakes3],
    category: ProductCategories.SOCKS,
  },
  {
    id: 'socks',
    title: { en: 'BASE - SOCKS - BLACK', ua: 'BASE - ШКАРПЕТКИ - ЧОРНІ' },
    price: 7.65,
    description: {
      en: `Do you have legs?! We have the product for you! We call them "socks". It's basically gloves, but for your feet. It might sound crazy, but we think it's a trend that's sure to catch on. With a medium height and thickness, as well as the Farang logo on the ankle and sole, these are sure to become your new favorite gloves, or "socks".

			Fabric composition: 69% polyester, 15% spandex, 3% nylon, 12% rubber`,
      ua: `У вас є ноги?! У нас є продукт для вас! Ми називаємо їх «шкарпетками». В основному це рукавички, але для ваших ніг. Це може здатися божевільним, але ми вважаємо, що це тренд, який точно приживеться. Завдяки середній висоті та товщині, а також логотипу Farang на щиколотці та підошві, це обов’язково стануть вашими новими улюбленими рукавичками, або ж «шкарпетками».

		Склад тканини: 69% поліестер, 15% спандекс, 3% нейлон, 12% гума`,
    },
    imgs: [base, base2, base3],
    category: ProductCategories.SOCKS,
  },
];
