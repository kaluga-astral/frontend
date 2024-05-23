import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { MenuOrganization } from './MenuOrganization';
import { CURRENT_ORGANIZATION, ORGANIZATIONS } from './MenuOrganizations.stubs';

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

  it('Компонент не рендерится, когда флаг shouldRender=false', () => {
    renderWithTheme(
      <MenuOrganization
        shouldRender={false}
        organizations={[]}
        currentOrganization={null}
        onSelect={() => {}}
        onAddOrganization={() => {}}
      />,
    );

    expect(screen.queryByRole('div')).not.toBeInTheDocument();
  });
});
