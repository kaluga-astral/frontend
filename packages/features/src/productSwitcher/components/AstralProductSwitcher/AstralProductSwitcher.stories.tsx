import { type Meta, type StoryObj } from '@storybook/react';

import { AstralProductSwitcher } from './AstralProductSwitcher';
import { ProductFilterType } from './enums';

const IDENTITY_URL = 'https://identity';

type MockRequest = {
  searchParams: Record<string, string>;
};

const mockImage =
  'data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjI1NzE5IDE3LjI2ODlDOC4yNTcxOSAxNy4yNjg5IDQuNTY5MzMgMjAuMjAyMyA0LjExODcyIDIyLjA3OTZDMi43NjA3OCAyNy43MzY5IDEzLjQwNTkgMjAuOTM3NyAxNy45Njg3IDE3LjUxMDZDMTkuMjMwNCAxNi41NjI5IDIxLjAyNTggMTUuMTIwOSAyMi43MDE4IDEzLjYwNTlMMjIuOTExOSAxMy40NzQxQzIyLjkwNjQgMTMuNDU5NCAyMi45MDA5IDEzLjQ0NDcgMjIuODk1NCAxMy40MzAxQzI2LjI4NDQgMTAuMzM3OCAyOS4wNzUgNy4wMTExOSAyNS43NjgyIDcuMDAwMDFDMjMuOTcwOCA2Ljk5Mzk0IDE5Ljg3NjEgOC45MzMyNiAxOS44NzYxIDguOTMzMjZDMTkuODc2MSA4LjkzMzI2IDIyLjc4MjggNy43MzU2NCAyMy40NjUxIDguMDgyOUMyNC40NDM2IDguNTgwODggMjMuMzk5NSA5LjgzMDI2IDIxLjY2OSAxMS4zMDE5QzIwLjMxODEgOS42NDU2MSAxOC4yOTU2IDguNTkzMzkgMTYuMDM1MyA4LjU5MzM5QzExLjk2ODEgOC41OTMzOSA4LjY3MDk2IDEyLjAwMDIgOC42NzA5NiAxNi4yMDI4QzguNjcwOTYgMTcuNjE2MSA5LjA0Mzc5IDE4LjkzOTMgOS42OTMzNiAyMC4wNzMzQzcuNTgzODkgMjEuMzE2NyA1Ljk1ODY3IDIxLjg0OCA2LjAwODkyIDIwLjQzMDVDNi4wNDY0IDE5LjM3MzMgOC4yNTcxOSAxNy4yNjg5IDguMjU3MTkgMTcuMjY4OVpNMjMuMzk5NiAxNi4yMDI4QzIzLjM5OTYgMjAuNDA1NCAyMC4xMDI1IDIzLjgxMjMgMTYuMDM1MyAyMy44MTIzQzE1LjYwMzkgMjMuODEyMyAxNS4xODEyIDIzLjc3NCAxNC43NzAyIDIzLjcwMDVDMTQuMzM4NyAyMy42MjMzIDE0LjExNDEgMjMuMTYwNCAxNC4zMTYxIDIyLjc3MTRDMTYuMTk1MiAxOS4xNTI1IDIxLjAxNzMgMTYuMzkxNiAyMy4zMzkzIDE1LjIyNTNDMjMuMzc5IDE1LjU0NTMgMjMuMzk5NiAxNS44NzE2IDIzLjM5OTYgMTYuMjAyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04LjUgOC41QzguNSA5LjMyODQzIDcuODI4NDMgMTAgNyAxMEM2LjE3MTU3IDEwIDUuNSA5LjMyODQzIDUuNSA4LjVDNS41IDcuNjcxNTcgNi4xNzE1NyA3IDcgN0M3LjgyODQzIDcgOC41IDcuNjcxNTcgOC41IDguNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';

const MOCK_FETCH_IDENTITY_PRODUCT = [
  {
    url: `${IDENTITY_URL}/api/products/widget?tenantId=*`,
    method: 'GET',
    status: 200,
    response: ({ searchParams }: MockRequest) => {
      switch (searchParams.tenantId) {
        case 'astral': {
          return {
            data: [
              {
                id: '1',
                name: 'Астрал.Продукт 1',
                productUrl: 'https://product1',
                description: 'Астрал.Продукт 1',
                shortDescription: 'Астрал.Продукт 1',
                iconFileId: '1',
                logoUrl: mockImage,
                backgroundHexColor: '#2e77ff',
                tenantId: 'astral',
              },
              {
                id: '2',
                name: 'Астрал.Продукт 2',
                productUrl: 'https://product2',
                description: 'Астрал.Продукт2',
                shortDescription: 'Астрал.Продукт2',
                iconFileId: '2',
                logoUrl: mockImage,
                backgroundHexColor: '#33adf2',
                tenantId: 'astral',
              },
              {
                id: '3',
                name: 'Астрал.Продукт 3',
                productUrl: 'https://product3',
                description: 'Астрал.Продукт3',
                shortDescription: 'Астрал.Продукт3',
                iconFileId: '3',
                logoUrl: mockImage,
                backgroundHexColor: '#755afd',
                tenantId: 'astral',
              },
              {
                id: '4',
                name: 'Астрал.Продукт 4',
                productUrl: 'https://product4',
                description: 'Астрал.Продукт4',
                shortDescription: 'Астрал.Продукт4',
                iconFileId: '4',
                logoUrl: mockImage,
                backgroundHexColor: '#00b2ff',
                tenantId: 'astral',
              },
              {
                id: '5',
                name: 'Астрал.Продукт 5',
                productUrl: 'https://product5',
                description: 'Астрал.Продукт5',
                shortDescription: 'Астрал.Продукт5',
                iconFileId: '5',
                logoUrl: mockImage,
                backgroundHexColor: '#7856ff',
                tenantId: 'astral',
              },
            ],
            meta: {
              totalCount: 5,
            },
          };
        }
        case 'eco': {
          return {
            data: [
              {
                id: '6',
                name: 'Экосистема-Продукт 1',
                productUrl: 'https://eco1',
                description: 'Экосистема-Продукт1',
                shortDescription: 'Экосистема-Продукт1',
                iconFileId: 'test',
                logoUrl: mockImage,
                backgroundHexColor: '#2e77ff',
                tenantId: 'eco',
              },
              {
                id: '7',
                name: 'Экосистема-Продукт 2',
                productUrl: 'https://eco2',
                description: 'Экосистема-Продукт2',
                shortDescription: 'Экосистема-Продукт2',
                iconFileId: 'test',
                logoUrl: mockImage,
                backgroundHexColor: '#7756FF',
                tenantId: 'eco',
              },
              {
                id: '8',
                name: 'Экосистема-Продукт 3',
                productUrl: 'https://eco3',
                description: 'Экосистема-Продукт3',
                shortDescription: 'Экосистема-Продукт3',
                iconFileId: 'test',
                logoUrl: mockImage,
                backgroundHexColor: '#0397b3',
                tenantId: 'eco',
              },
            ],
            meta: {
              totalCount: 3,
            },
          };
        }
        default: {
          return {
            data: [],
            meta: {
              totalCount: 0,
            },
          };
        }
      }
    },
  },
  {
    url: `${IDENTITY_URL}/api/products/group?groupId=*`,
    method: 'GET',
    status: 200,
    response: {
      data: [
        {
          id: '6',
          name: 'Группа Продукт 1',
          productUrl: 'https://eco1',
          description: 'Экосистема-Продукт1',
          shortDescription: 'Экосистема-Продукт1',
          iconFileId: 'test',
          logoUrl: mockImage,
          backgroundHexColor: '#2e77ff',
          tenantId: 'eco',
        },
        {
          id: '7',
          name: 'Группа Продукт 2',
          productUrl: 'https://eco2',
          description: 'Экосистема-Продукт2',
          shortDescription: 'Экосистема-Продукт2',
          iconFileId: 'test',
          logoUrl: mockImage,
          backgroundHexColor: '#7756FF',
          tenantId: 'eco',
        },
        {
          id: '8',
          name: 'Группа Продукт 3',
          productUrl: 'https://eco3',
          description: 'Экосистема-Продукт3',
          shortDescription: 'Экосистема-Продукт3',
          iconFileId: 'test',
          logoUrl: mockImage,
          backgroundHexColor: '#0397b3',
          tenantId: 'eco',
        },
      ],
      meta: {
        totalCount: 3,
      },
    },
  },
];

/**
 * Реализация виджета продуктов Astral. Поддерживает фильтрацию по группам и экосистемам с помощью параметров ```filterBy``` и```code```.
 * Внутри себя содержит всю логику получения, форматирования и отображения продуктов из Identity
 *
 * Для получения информации по экосистемам и продукта, а также за адресом identity, и кодами экосистемы и группы обращаться в команду ```Экосистема```
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=9236-108012&mode=design&t=j9or0RjIfmARezGD-4)
 * ### [Guide]()
 */
const meta: Meta<typeof AstralProductSwitcher> = {
  title: 'Features/ProductSwitcher/AstralProductSwitcher',
  component: AstralProductSwitcher,
  parameters: {
    mockData: MOCK_FETCH_IDENTITY_PRODUCT,
    refreshStoryOnUpdate: true,
  },
};

export default meta;

type Story = StoryObj<typeof AstralProductSwitcher>;

export const Interaction: Story = {
  args: {
    identityUrl: IDENTITY_URL,
    filterBy: ProductFilterType.Tenant,
    code: 'astral',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <AstralProductSwitcher identityUrl={IDENTITY_URL} />
);

/**
 * Чтобы получить список продуктов, отфильтрованных по экосистемам, необходимо указать параметр ```filterBy``` в значение ```tenant``` и указать параметр ```code```, равный ```коду вашей экосистемы```
 */
export const Tenant = () => (
  <AstralProductSwitcher
    identityUrl={IDENTITY_URL}
    filterBy={ProductFilterType.Tenant}
    code="eco"
  />
);

/**
 * Чтобы получить список продуктов, отфильтрованных по группам, необходимо указать параметр ```filterBy``` в значение ```group``` и указать параметр ```code```, равный ```коду вашей группы```
 */
export const Group = () => (
  <AstralProductSwitcher
    identityUrl={IDENTITY_URL}
    filterBy={ProductFilterType.Group}
    code="identityGroupID"
  />
);
