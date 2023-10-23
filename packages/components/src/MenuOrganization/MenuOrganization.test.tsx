import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { MenuOrganization } from './MenuOrganization';

const CURRENT_ORGANIZATION = {
  name: 'АО Калуга-Астрал',
  inn: '1231312312',
  kpp: '1231231231',
  id: '2',
};

const ORGANIZATIONS = [
  {
    group: 'Подключенные',
    data: [
      {
        name: 'АО Калуга-Астрал с очень длинным длинным длинным длинным названием',
        inn: '170598611048',
        kpp: '777401697',
        id: '1',
      },
      {
        name: 'АО Копыта и рога',
        inn: '3605726192',
        kpp: '777401697',
        id: '2',
      },
      {
        name: 'АО Копыта и рога',
        inn: '170598611048',
        kpp: '777401697',
        id: '3',
      },
      {
        name: 'АО Копыта и рога',
        inn: '3605726192',
        kpp: '1231231231',
        id: '4',
      },
    ],
  },
  {
    group: 'Неактивные',
    data: [
      {
        name: 'АО Калуга-Астрал',
        inn: '1231312312',
        kpp: '1231231231',
        id: '1',
      },
      {
        name: 'АО Копыта и рога',
        inn: '1231312312',
        kpp: '1231231231',
        id: '2',
      },
      {
        name: 'АО Копыта и рога',
        inn: '1231312312',
        kpp: '1231231231',
        id: '3',
      },
      {
        name: 'АО Копыта и рога',
        inn: '1231312312',
        kpp: '1231231231',
        id: '4',
      },
      {
        name: 'АО Копыта и рога',
        inn: '1231312312',
        kpp: '1231231231',
        id: '5',
      },
      {
        name: 'АО Копыта и рога',
        inn: '1231312312',
        kpp: '1231231231',
        id: '6',
      },
    ],
  },
];

describe('MenuOrganization', () => {
  it('Prop:currentOrganization=null: отображается кнопка "Добавить организацию"', () => {
    renderWithTheme(
      <MenuOrganization
        organizations={ORGANIZATIONS}
        currentOrganization={null}
        onSelect={() => {}}
      />,
    );

    expect(screen.getByText('Добавить организацию')).toBeInTheDocument();
  });

  it('Prop:currentOrganization=CURRENT_ORGANIZATION: отображается выбранная организация', () => {
    renderWithTheme(
      <MenuOrganization
        organizations={ORGANIZATIONS}
        currentOrganization={CURRENT_ORGANIZATION}
        onSelect={() => {}}
      />,
    );

    expect(screen.getByText('АО Калуга-Астрал')).toBeInTheDocument();
  });
});
