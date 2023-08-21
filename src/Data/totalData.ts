import { TotalData } from 'App/types/types';
import { accessoriesData } from 'Data/accessoriesData';
import { hatsData } from 'Data/hatsData';
import { longSleeveData } from 'Data/longSleeveData';
import { pantsData } from 'Data/pantsData';
import { shoesData } from 'Data/shoesData';
import { shortsData } from 'Data/shortsData';
import { socksData } from 'Data/socksData';
import { tShirtsData } from 'Data/tShirtsData';
import { TProductCategories } from 'App/types/types';
export const totalData: TotalData<TProductCategories> = {
  all: [
    ...accessoriesData,
    ...hatsData,
    ...longSleeveData,
    ...pantsData,
    ...shoesData,
    ...shortsData,
    ...socksData,
    ...tShirtsData,
  ],
  accessories: accessoriesData,
  hats: hatsData,
  longSleeve: longSleeveData,
  pants: pantsData,
  shoes: shoesData,
  shorts: shortsData,
  socks: socksData,
  tShirts: tShirtsData,
};
