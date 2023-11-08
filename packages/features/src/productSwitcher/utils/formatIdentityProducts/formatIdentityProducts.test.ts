import { WidgetProduct } from '@astral/ui';

import { IdentityProductsWidgetDTO } from '../../types';

import { formatIdentityProducts } from './formatIdentityProducts';

const IDENTITY_URL = 'testIdentity';

describe('formatIdentityProducts', () => {
  it('formatIdentityProducts форматирует список продуктов identity в формат для виджета продуктов', () => {
    const identityInitialProducts: IdentityProductsWidgetDTO[] = [
      {
        id: 'testId',
        name: 'testName',
        productUrl: 'testUrl',
        iconFileId: 'testIconFile',
        backgroundHexColor: 'testColor',
      },
    ];

    const formattedProducts: WidgetProduct[] = [
      {
        id: 'testId',
        url: 'testUrl',
        name: 'testName',
        logoUrl: 'testIdentity/api/Files/testIconFile',
        color: 'testColor',
      },
    ];

    const result = formatIdentityProducts(
      IDENTITY_URL,
      identityInitialProducts,
    );

    expect(result).toStrictEqual(formattedProducts);
  });

  it('formatIdentityProducts корретно форматирует продукты с незаполненными необязательными полями', () => {
    const identityInitialProducts: IdentityProductsWidgetDTO[] = [
      {
        id: 'testId',
        iconFileId: 'testIconFile',
        logoUrl: 'testIdentity/api/Files/testIconFile',
      },
    ];

    const formattedProducts: WidgetProduct[] = [
      {
        id: 'testId',
        url: '',
        name: '',
        logoUrl: 'testIdentity/api/Files/testIconFile',
        color: '',
      },
    ];

    const result = formatIdentityProducts(
      IDENTITY_URL,
      identityInitialProducts,
    );

    expect(result).toStrictEqual(formattedProducts);
  });

  it('formatIdentityProducts возвращает пустой массив, если нет продуктов', () => {
    const result = formatIdentityProducts(IDENTITY_URL);

    expect(result).toStrictEqual([]);
  });
});
