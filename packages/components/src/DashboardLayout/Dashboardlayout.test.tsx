import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { MenuOrganizationProps } from '../MenuOrganization';

import { DashboardLayout } from './DashboardLayout';

const PROFILE = {
  displayName: 'displayName',
  annotation: 'annotation',
  avatar: { alt: 'alt', children: 'children' },
  menu: () => <div />,
};

const PRODUCT = { name: 'name', logo: () => <div /> };

describe('DashboardLayout', () => {
  it('Prop:menuOrganization=undefined: компонент выбора организации не отображается', () => {
    renderWithTheme(
      <DashboardLayout>
        <DashboardLayout.Header
          menuOrganization={undefined}
          productSwitcher={undefined}
          product={PRODUCT}
          profile={PROFILE}
        />
      </DashboardLayout>,
    );

    expect(screen.queryByText('Добавить организацию')).not.toBeInTheDocument();
  });

  it('Prop:menuOrganization={}: компонент выбора организации отображается', () => {
    renderWithTheme(
      <DashboardLayout>
        <DashboardLayout.Header
          productSwitcher={undefined}
          menuOrganization={{} as MenuOrganizationProps}
          product={PRODUCT}
          profile={PROFILE}
        />
      </DashboardLayout>,
    );

    expect(screen.getByText('Добавить организацию')).toBeInTheDocument();
  });
});
