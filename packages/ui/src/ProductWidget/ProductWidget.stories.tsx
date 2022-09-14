import { ComponentMeta } from '@storybook/react';

import { ProductWidget, WidgetProduct } from './ProductWidget';

export default {
  title: 'Components/ProductWidget',
  component: ProductWidget,
} as ComponentMeta<typeof ProductWidget>;

const handleGetProducts = (): Promise<WidgetProduct[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            url: '',
            name: 'Астрал.Отчет',
            logoUrl:
              'https://identity.astral.ru/api/Files/06a5fb56-210c-4f08-bb7b-253a9103560f',
            color: '#2d77ff',
          },
          {
            url: '',
            name: 'Астрал.ЭДО',
            logoUrl:
              'https://identity.astral.ru/api/Files/b5b06b5a-2d0e-491b-9815-043d82f104aa',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.КЭДО',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.ОФД',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
          {
            url: '',
            name: 'Астрал.ЭТ',
            logoUrl:
              'https://identity.astral.ru/api/Files/ac497150-1926-47be-9e5f-42e739e7279c',
            color: 'rgb(55 103 152)',
          },
          {
            url: '',
            name: 'Личный кабинет',
            logoUrl:
              'https://identity.astral.ru/api/Files/9d214f12-c518-44e2-a711-fa1bf2b89fdd',
            color: 'rgb(10, 124, 255)',
          },
          {
            url: '',
            name: 'Кабинет партнера',
            logoUrl:
              'https://identity.astral.ru/api/Files/f0519e97-7a50-4796-a8d2-877cd15c7668',
            color: 'rgb(117 90 253)',
          },
        ]),
      1500,
    ),
  );
};

export const Showcase = () => {
  return <ProductWidget getProducts={handleGetProducts} />;
};
