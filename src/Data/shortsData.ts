import { ProductCategories } from 'App/types/types';
import essential from 'Assets/images/products/shorts/essential/essential.webp';
import essential2 from 'Assets/images/products/shorts/essential/essential2.webp';
import essential3 from 'Assets/images/products/shorts/essential/essential3.webp';
import massive from 'Assets/images/products/shorts/massive/massive.webp';
import massive2 from 'Assets/images/products/shorts/massive/massive2.webp';
import massive3 from 'Assets/images/products/shorts/massive/massive3.webp';
import mesh from 'Assets/images/products/shorts/mesh/mesh.webp';
import mesh2 from 'Assets/images/products/shorts/mesh/mesh2.webp';
import mesh3 from 'Assets/images/products/shorts/mesh/mesh3.webp';

export const shortsData = [
  {
    id: 'short-jeans-2020',
    title: {
      en: 'ESSENTIAL - STRETCH SHORTS - LIGHT GREY',
      ua: 'ESSENTIAL - ШОРТИ СТРЕЙЧ - СВІТЛО СІРИЙ',
    },
    price: 65.0,
    description: {
      en: `The Essential Stretch Shorts were born when our athlete Valtteri decided to optimize our stretch jeans for summer in his home country of Finland.

			Summer in Finland lasts about three days, so having the perfect pair of shorts to effectively enjoy the sunshine is a matter of life and death.
			
			Using scissors and his sewing machine, he created this masterpiece, which we quickly decided to put into production.
			
			
			Made of 90% cotton, 7% T-400 and 3% lycra with snow wash fabric.
			
			Jason wears a size large. He is 5 feet 10 (178 cm) tall and weighs 176 pounds (80 kg). He could also comfortably wear a size Medium for a tighter fit.`,
      ua: `Шорти Essential Stretch Shorts з’явилися на світ, коли наш спортсмен Валттері вирішив оптимізувати наші стрейч-джинси для літа у своїй рідній країні Фінляндії.

		Літо у Фінляндії триває близько трьох днів, тому мати ідеальну пару шортів, щоб ефективно насолоджуватися сонячним світлом, є питанням життя і смерті.
		
		Використовуючи ножиці та свою швейну машинку, він створив цей шедевр, який ми швидко вирішили запустити у виробництво.
		
		
		Виготовлена з 90% бавовни, 7% T-400 і 3% лайкри з тканиною снігового прання.
		
		Джейсон носить великий розмір. Його зріст 5 футів 10 (178 см) і вага 176 фунтів (80 кг). Він також міг зручно носити розмір Medium для щільнішої посадки.`,
    },
    imgs: [essential, essential2, essential3],
    sizeList: [
      { size: 'XS', quantity: 4 },
      { size: 'S', quantity: 4 },
      { size: 'M', quantity: 4 },
      { size: 'L', quantity: 0 },
      { size: 'XL', quantity: 1 },
      { size: 'XXL', quantity: 2 },
    ],
    category: ProductCategories.SHORTS,
  },
  {
    id: 'massive-logo-shorts-black',
    title: {
      en: 'MASSIVE LOGO - SHORTS - (BLACK)',
      ua: 'MASSIVE LOGO - ШОРТИ - (ЧОРНІ)',
    },
    price: 50.15,
    description: {
      en: `The reason you see so many freerunners wearing baggy clothing is because the clothing creates its own shape and form. Every time we design a product, we think about how it will look and feel during a run jump or a double turn.

		If you do parkour, you know that clothes can be fun. This is the feeling we were looking for when we created these shorts. The fit is based on a similar pair we found at a thrift store in Tokyo. We made some changes, added zippers to the pockets and added shape with a patterned logo on the front and back. 100% cotton.
		
		Pasha wears a size L. He is 5'10 (178cm) tall and weighs 165lbs (75kg).`,
      ua: `Причина, чому ви бачите, що так багато фріраннерів носять мішкуватий одяг, полягає в тому, що одяг створює власну форму та форму. Кожного разу, коли ми створюємо продукт, ми думаємо про те, як він буде виглядати і відчувати себе під час стрибка з розбігу або подвійного повороту.

		Якщо ви займаєтесь паркуром, ви знаєте, що одяг може бути веселим. Це відчуття, яке ми шукали, коли створювали ці шорти. Крій заснований на подібній парі, яку ми знайшли в магазині секонд-хенду в Токіо. Ми внесли деякі зміни, додали блискавки до кишень і надали форму за допомогою логотипу з візерунком спереду та ззаду. 100% бавовна.
		
		Паша носить розмір L. Його зріст 5’10 (178 см) і вага 165 фунтів (75 кг).`,
    },
    imgs: [massive, massive2, massive3],
    sizeList: [
      { size: 'XS', quantity: 3 },
      { size: 'S', quantity: 3 },
      { size: 'M', quantity: 0 },
      { size: 'L', quantity: 1 },
      { size: 'XL', quantity: 5 },
      { size: 'XXL', quantity: 5 },
    ],
    category: ProductCategories.SHORTS,
  },
  {
    id: 'mesh-shorts-black',
    title: { en: 'MESH - SHORTS - BLACK', ua: 'MESH - ШОРТИ - ЧОРНІ' },
    price: 78.0,
    description: {
      en: `Sleek black shorts on black for the best beach sessions of the year. The 100% polyester mesh ensures quick drying after swimming and the above-the-knee cut is just how we like it. We added a small zippered pocket so you don't lose your keys. You don't need to take anything else with you.

			Dom is wearing a size M. He is 5'11" (181 cm) tall and weighs 176 pounds (80 kg).`,
      ua: `Витончені чорні шорти на чорному для найкращих пляжних сесій року. Сітка зі 100% поліестеру забезпечує швидке висихання після плавання та стрижки вище коліна саме так, як нам подобається. Ми додали невелику кишеню на блискавці, щоб ви не втратили ключі. Більше нічого брати з собою не потрібно.

			Дом одягнений у розмір М. Його зріст 5'11 дюймів (181 см) і важить 176 фунтів (80 кг).`,
    },
    imgs: [mesh, mesh2, mesh3],
    sizeList: [
      { size: 'XS', quantity: 4 },
      { size: 'S', quantity: 4 },
      { size: 'M', quantity: 4 },
      { size: 'L', quantity: 1 },
      { size: 'XL', quantity: 0 },
      { size: 'XXL', quantity: 10 },
    ],
    category: ProductCategories.SHORTS,
  },
];
