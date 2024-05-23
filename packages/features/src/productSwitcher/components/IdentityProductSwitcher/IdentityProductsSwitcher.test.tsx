import { describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';

import { IdentityProductSwitcher } from './IdentityProductSwitcher';

const IDENTITY_URL = 'https://identity';
const TestComponent = () => (
  <IdentityProductSwitcher identityUrl={IDENTITY_URL} />
);

vi.mock('./utils', async () => {
  const MOCK_RETURN_PRODUCTS = {
    tenant1: [
      {
        id: 'testProduct1',
        url: 'https://product',
        name: 'testProductName1',
        logoUrl: 'https://identity/api/files/testIconFile',
        color: 'testColor',
      },
      {
        id: 'testProduct2',
        url: 'https://localhost',
        name: 'testProductName2',
        logoUrl: 'https://identity/api/files/testIconFile',
        color: 'testColor2',
      },
    ],
    tenant2: [
      {
        id: 'testProduct3',
        url: 'https://product',
        name: 'testProductName3',
        logoUrl: 'https://identity/api/files/testIconFile',
        color: 'testColor',
      },
      {
        id: 'testProduct4',
        url: 'https://localhost',
        name: 'testProductName4',
        logoUrl: 'https://identity/api/files/testIconFile',
        color: 'testColor2',
      },
    ],
  };

  const MOCK_RETURN_TENANTS = [
    {
      id: 'tenant1',
      name: 'Экосистема1',
    },
    {
      id: 'tenant2',
      name: 'Экосистема2',
    },
  ];

  return {
    getTenantsProducts: vi.fn().mockResolvedValue(MOCK_RETURN_PRODUCTS),
    getIdentityTenants: vi.fn().mockResolvedValue(MOCK_RETURN_TENANTS),
  };
});

describe('IdentityProductSwitcher', () => {
  it('При открытие виджета, отображается список экосистем', async () => {
    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('button'));
    expect(screen.getByText('Экосистема1')).toBeVisible();
    expect(screen.getByText('Экосистема2')).toBeVisible();
  });

  it('При открытие виджета, отображаются продукты из первой выбранной экосистемы', async () => {
    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('button'));
    expect(screen.getByText('testProductName1')).toBeVisible();
    expect(screen.queryByText('testProductName3')).toBeNull();
  });

  it('При смене экосистемы, отображаются нужные продукты', async () => {
    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('button'));
    await userEvents.click(screen.getByRole('button', { name: 'Экосистема2' }));
    expect(screen.getByText('testProductName4')).toBeVisible();
    expect(screen.queryByText('testProductName2')).toBeNull();
  });

  it('При клике на продукт в виджете, осуществляется переход в продукт', async () => {
    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('button'));

    expect(
      screen.getByRole('menuitem', { name: 'testProductName1' }),
    ).toHaveAttribute('href', 'https://product');
  });

  it('При ошибке получения продуктов, отображается ошибка', async () => {
    vi.restoreAllMocks();
    renderWithTheme(<IdentityProductSwitcher identityUrl="" />);
    await userEvents.click(screen.getByRole('button'));
    expect(screen.getByText('Что-то пошло не так')).toBeVisible();
  });

  it('При загрузке продуктов в виджете появляется лоудер', async () => {
    renderWithTheme(<TestComponent />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      const loader = screen.getByRole('progressbar');

      expect(loader).toBeVisible();
    });
  });
});
