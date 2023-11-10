import { Meta, StoryObj } from '@storybook/react';

import { ProductSwitcher } from './ProductSwitcher';
import { WidgetProduct } from './types';

const mockImage =
  'data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjI1NzE5IDE3LjI2ODlDOC4yNTcxOSAxNy4yNjg5IDQuNTY5MzMgMjAuMjAyMyA0LjExODcyIDIyLjA3OTZDMi43NjA3OCAyNy43MzY5IDEzLjQwNTkgMjAuOTM3NyAxNy45Njg3IDE3LjUxMDZDMTkuMjMwNCAxNi41NjI5IDIxLjAyNTggMTUuMTIwOSAyMi43MDE4IDEzLjYwNTlMMjIuOTExOSAxMy40NzQxQzIyLjkwNjQgMTMuNDU5NCAyMi45MDA5IDEzLjQ0NDcgMjIuODk1NCAxMy40MzAxQzI2LjI4NDQgMTAuMzM3OCAyOS4wNzUgNy4wMTExOSAyNS43NjgyIDcuMDAwMDFDMjMuOTcwOCA2Ljk5Mzk0IDE5Ljg3NjEgOC45MzMyNiAxOS44NzYxIDguOTMzMjZDMTkuODc2MSA4LjkzMzI2IDIyLjc4MjggNy43MzU2NCAyMy40NjUxIDguMDgyOUMyNC40NDM2IDguNTgwODggMjMuMzk5NSA5LjgzMDI2IDIxLjY2OSAxMS4zMDE5QzIwLjMxODEgOS42NDU2MSAxOC4yOTU2IDguNTkzMzkgMTYuMDM1MyA4LjU5MzM5QzExLjk2ODEgOC41OTMzOSA4LjY3MDk2IDEyLjAwMDIgOC42NzA5NiAxNi4yMDI4QzguNjcwOTYgMTcuNjE2MSA5LjA0Mzc5IDE4LjkzOTMgOS42OTMzNiAyMC4wNzMzQzcuNTgzODkgMjEuMzE2NyA1Ljk1ODY3IDIxLjg0OCA2LjAwODkyIDIwLjQzMDVDNi4wNDY0IDE5LjM3MzMgOC4yNTcxOSAxNy4yNjg5IDguMjU3MTkgMTcuMjY4OVpNMjMuMzk5NiAxNi4yMDI4QzIzLjM5OTYgMjAuNDA1NCAyMC4xMDI1IDIzLjgxMjMgMTYuMDM1MyAyMy44MTIzQzE1LjYwMzkgMjMuODEyMyAxNS4xODEyIDIzLjc3NCAxNC43NzAyIDIzLjcwMDVDMTQuMzM4NyAyMy42MjMzIDE0LjExNDEgMjMuMTYwNCAxNC4zMTYxIDIyLjc3MTRDMTYuMTk1MiAxOS4xNTI1IDIxLjAxNzMgMTYuMzkxNiAyMy4zMzkzIDE1LjIyNTNDMjMuMzc5IDE1LjU0NTMgMjMuMzk5NiAxNS44NzE2IDIzLjM5OTYgMTYuMjAyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04LjUgOC41QzguNSA5LjMyODQzIDcuODI4NDMgMTAgNyAxMEM2LjE3MTU3IDEwIDUuNSA5LjMyODQzIDUuNSA4LjVDNS41IDcuNjcxNTcgNi4xNzE1NyA3IDcgN0M3LjgyODQzIDcgOC41IDcuNjcxNTcgOC41IDguNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';

/**
 * Реализация абстрактного виджета продуктов. Product Switcher дает возможность быстрого перехода к другому продукту.\
 * Это Абстрактный компонент, реализация виджета продуктов Астрала представлен в [AstralProductSwitcher](/?path=/docs/features-productswitcher-astralproductswitcher--docs)
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=9236-108012&mode=design&t=j9or0RjIfmARezGD-4)
 * ### [Guide]()
 */
const meta: Meta<typeof ProductSwitcher> = {
  title: 'Components/ProductSwitcher',
  component: ProductSwitcher,
};

export default meta;

type Story = StoryObj<typeof ProductSwitcher>;

export const Interaction: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const handleReject = (): Promise<WidgetProduct[]> => {
  return new Promise((_resolve, reject) => reject(''));
};

const handleGetProducts = (): Promise<WidgetProduct[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: '1',
            name: 'Астрал.Продукт 1',
            url: 'https://product1',
            logoUrl: mockImage,
            color: '#2e77ff',
          },
          {
            id: '2',
            name: 'Астрал.Продукт 2',
            url: 'https://product2',
            logoUrl: mockImage,
            color: '#33adf2',
          },
          {
            id: '3',
            name: 'Астрал.Продукт 3',
            url: 'https://product3',
            logoUrl: mockImage,
            color: '#755afd',
          },
          {
            id: '4',
            name: 'Астрал.Продукт 4',
            url: 'https://product4',
            logoUrl: mockImage,
            color: '#00b2ff',
          },
          {
            id: '5',
            name: 'Астрал.Продукт 5',
            url: 'https://product5',
            logoUrl: mockImage,
            color: '#7856ff',
          },
        ]),
      1500,
    ),
  );
};

/**
 * Стандартное использования виджета продуктов
 */
export const Example = () => (
  <ProductSwitcher getProducts={handleGetProducts} />
);

/**
 * Обработка ошибки при загрузке продуктов
 */
export const Error = () => <ProductSwitcher getProducts={handleReject} />;
