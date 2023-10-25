import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { MenuOrganization } from './MenuOrganization';
import {
  CURRENT_ORGANIZATION,
  ORGANIZATIONS,
} from './MenuOrganization.stories';

describe('MenuOrganization', () => {
  it('Prop:currentOrganization=null: отображается кнопка "Добавить организацию"', () => {
    renderWithTheme(
      <MenuOrganization
        organizations={ORGANIZATIONS}
        currentOrganization={null}
        onSelect={() => {}}
        onAddOrganization={() => {}}
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
        onAddOrganization={() => {}}
      />,
    );

    expect(screen.getByText('АО Калуга-Астрал')).toBeInTheDocument();
  });
});
