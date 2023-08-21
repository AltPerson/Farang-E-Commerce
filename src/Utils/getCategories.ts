import { accessoriesData } from 'Data/accessoriesData';
import { hatsData } from 'Data/hatsData';
import { longSleeveData } from 'Data/longSleeveData';
import { pantsData } from 'Data/pantsData';
import { shoesData } from 'Data/shoesData';
import { shortsData } from 'Data/shortsData';
import { socksData } from 'Data/socksData';
import { tShirtsData } from 'Data/tShirtsData';

export function getCategories(): string[] {
  return [
    'all',
    ...[
      accessoriesData,
      hatsData,
      longSleeveData,
      pantsData,
      shoesData,
      shortsData,
      socksData,
      tShirtsData,
    ].map((item) => {
      return item[0].category;
    }),
  ];
}
