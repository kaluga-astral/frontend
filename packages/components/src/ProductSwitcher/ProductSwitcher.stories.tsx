import { ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

import { ExampleTemplate } from '../docs';
import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { DashboardLayout } from '../DashboardLayout';

import { ProductSwitcher } from './ProductSwitcher';
import { WidgetProduct } from './types';

const mockImage =
  'data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjI1NzE5IDE3LjI2ODlDOC4yNTcxOSAxNy4yNjg5IDQuNTY5MzMgMjAuMjAyMyA0LjExODcyIDIyLjA3OTZDMi43NjA3OCAyNy43MzY5IDEzLjQwNTkgMjAuOTM3NyAxNy45Njg3IDE3LjUxMDZDMTkuMjMwNCAxNi41NjI5IDIxLjAyNTggMTUuMTIwOSAyMi43MDE4IDEzLjYwNTlMMjIuOTExOSAxMy40NzQxQzIyLjkwNjQgMTMuNDU5NCAyMi45MDA5IDEzLjQ0NDcgMjIuODk1NCAxMy40MzAxQzI2LjI4NDQgMTAuMzM3OCAyOS4wNzUgNy4wMTExOSAyNS43NjgyIDcuMDAwMDFDMjMuOTcwOCA2Ljk5Mzk0IDE5Ljg3NjEgOC45MzMyNiAxOS44NzYxIDguOTMzMjZDMTkuODc2MSA4LjkzMzI2IDIyLjc4MjggNy43MzU2NCAyMy40NjUxIDguMDgyOUMyNC40NDM2IDguNTgwODggMjMuMzk5NSA5LjgzMDI2IDIxLjY2OSAxMS4zMDE5QzIwLjMxODEgOS42NDU2MSAxOC4yOTU2IDguNTkzMzkgMTYuMDM1MyA4LjU5MzM5QzExLjk2ODEgOC41OTMzOSA4LjY3MDk2IDEyLjAwMDIgOC42NzA5NiAxNi4yMDI4QzguNjcwOTYgMTcuNjE2MSA5LjA0Mzc5IDE4LjkzOTMgOS42OTMzNiAyMC4wNzMzQzcuNTgzODkgMjEuMzE2NyA1Ljk1ODY3IDIxLjg0OCA2LjAwODkyIDIwLjQzMDVDNi4wNDY0IDE5LjM3MzMgOC4yNTcxOSAxNy4yNjg5IDguMjU3MTkgMTcuMjY4OVpNMjMuMzk5NiAxNi4yMDI4QzIzLjM5OTYgMjAuNDA1NCAyMC4xMDI1IDIzLjgxMjMgMTYuMDM1MyAyMy44MTIzQzE1LjYwMzkgMjMuODEyMyAxNS4xODEyIDIzLjc3NCAxNC43NzAyIDIzLjcwMDVDMTQuMzM4NyAyMy42MjMzIDE0LjExNDEgMjMuMTYwNCAxNC4zMTYxIDIyLjc3MTRDMTYuMTk1MiAxOS4xNTI1IDIxLjAxNzMgMTYuMzkxNiAyMy4zMzkzIDE1LjIyNTNDMjMuMzc5IDE1LjU0NTMgMjMuMzk5NiAxNS44NzE2IDIzLjM5OTYgMTYuMjAyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04LjUgOC41QzguNSA5LjMyODQzIDcuODI4NDMgMTAgNyAxMEM2LjE3MTU3IDEwIDUuNSA5LjMyODQzIDUuNSA4LjVDNS41IDcuNjcxNTcgNi4xNzE1NyA3IDcgN0M3LjgyODQzIDcgOC41IDcuNjcxNTcgOC41IDguNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';

export default {
  title: 'Components/ProductSwitcher',
  component: ProductSwitcher,
  excludeStories: ['handleGetProducts', 'handleReject'],
} as ComponentMeta<typeof ProductSwitcher>;

export const handleReject = (): Promise<WidgetProduct[]> => {
  return new Promise((_resolve, reject) => reject(''));
};

export const handleGetProducts = (): Promise<WidgetProduct[]> => {
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

const header = {
  productSwitcher() {
    return (
      <Box>
        <ProductSwitcher getProducts={handleGetProducts} />
      </Box>
    );
  },
  product: {
    name: 'Астрал.Продукт',
    logo() {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 6.10352e-05C5.1195 6.10352e-05 4 1.11956 4 2.50006V3.00006H13.75C15.545 3.00006 17 4.45506 17 6.25006V11.2501C17 12.2166 16.2165 13.0001 15.25 13.0001H8.75C7.7835 13.0001 7 12.2166 7 11.2501V8.00006H5C4.4475 8.00006 4 8.44756 4 9.00006V13.5001C4 14.8806 5.1195 16.0001 6.5 16.0001H17.5C18.8805 16.0001 20 14.8806 20 13.5001V2.50006C20 1.11956 18.8805 6.10352e-05 17.5 6.10352e-05H6.5Z"
            fill="#8566FF"
          />
          <path
            d="M2.5 4.00006C1.1195 4.00006 0 5.11956 0 6.50006V17.5001C0 18.8806 1.1195 20.0001 2.5 20.0001H13.5C14.8805 20.0001 16 18.8806 16 17.5001V17.0001H6.25C4.455 17.0001 3 15.5451 3 13.7501V8.75006C3 7.78356 3.7835 7.00006 4.75 7.00006H11.25C12.2165 7.00006 13 7.78356 13 8.75006V12.0001H15C15.5525 12.0001 16 11.5526 16 11.0001V6.50006C16 5.11956 14.8805 4.00006 13.5 4.00006H2.5Z"
            fill="#5D3FD4"
          />
        </svg>
      );
    },
  },
  profile: {
    displayName: 'Григорьев Виталий',
    annotation: 'vitatiy_grig@mail.ru',
    avatar: {
      alt: 'Григорьев Виталий',
      children: 'ГВ',
    },
    menu: () => null as unknown as JSX.Element,
  },
};

export const Default = () => {
  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        Product Switcher
      </Typography>
      <Typography paragraph>
        Product Switcher дает возможность быстрого перехода к другому продукту.
        Используется в хэдере системы
      </Typography>
      <Typography variant="h4" paragraph>
        Типы компонента
      </Typography>
      <ExampleTemplate.Case
        title="Переход к другому продукту"
        descriptionList={['']}
      >
        <LegacyGrid
          container
          justifyContent="center"
          autoFlow="column"
          spacing={4}
        >
          <ProductSwitcher getProducts={handleGetProducts} />
          <ProductSwitcher getProducts={handleReject} />
        </LegacyGrid>
      </ExampleTemplate.Case>
      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>
      <DashboardLayout>
        <DashboardLayout.Header {...header} />
      </DashboardLayout>
    </ExampleTemplate>
  );
};
