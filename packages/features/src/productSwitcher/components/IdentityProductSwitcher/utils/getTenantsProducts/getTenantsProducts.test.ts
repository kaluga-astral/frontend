import { describe, expect, it, vi } from 'vitest';

import { getTenantsProducts } from './getTenantsProducts';

const IDENTITY_URL = 'https://identity';

vi.mock('../../../../utils', async () => {
  const MOCK_RETURN_PRODUCTS = [
    {
      id: 'testId',
      url: 'https://product',
      name: 'testName',
      logoUrl: 'https://identity/api/files/testIconFile',
      color: 'testColor',
    },
    {
      id: 'testId2',
      url: 'https://localhost',
      name: 'testName2',
      logoUrl: 'https://identity/api/files/testIconFile',
      color: 'testColor2',
    },
  ];

  return {
    getIdentityProducts: vi.fn().mockResolvedValue(MOCK_RETURN_PRODUCTS),
  };
});

describe('getTenantsProducts', () => {
  it('getTenantsProducts фильтрует продукты по hostname', async () => {
    const expectedResult = {
      astral: [
        {
          id: 'testId',
          url: 'https://product',
          name: 'testName',
          logoUrl: 'https://identity/api/files/testIconFile',
          color: 'testColor',
        },
      ],
    };
    const result = await getTenantsProducts(IDENTITY_URL, ['astral']);

    expect(result).toStrictEqual(expectedResult);
  });

  it('getTenantsProducts форматирует продукты по нескольким экосистемам', async () => {
    const expectedResult = {
      eco: [
        {
          color: 'testColor',
          id: 'testId',
          logoUrl: 'https://identity/api/files/testIconFile',
          name: 'testName',
          url: 'https://product',
        },
      ],
      astral: [
        {
          id: 'testId',
          url: 'https://product',
          name: 'testName',
          logoUrl: 'https://identity/api/files/testIconFile',
          color: 'testColor',
        },
      ],
    };
    const result = await getTenantsProducts(IDENTITY_URL, ['astral', 'eco']);

    expect(result).toStrictEqual(expectedResult);
  });
});
