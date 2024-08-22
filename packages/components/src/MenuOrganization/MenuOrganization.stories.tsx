import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  MenuOrganization,
  type MenuOrganizationProps,
} from './MenuOrganization';
import { CURRENT_ORGANIZATION, ORGANIZATIONS } from './MenuOrganizations.stubs';
import { type Organization } from './types';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=6636-99860&mode=design&t=ZdnzBPdIiPvPyVhQ-0)
 * ### [Guide]()
 */
const meta: Meta<typeof MenuOrganization> = {
  title: 'Components/Navigation/MenuOrganization',
  component: MenuOrganization,
};

export default meta;

type Story = StoryObj<MenuOrganizationProps>;

export const Interaction: Story = {
  args: {
    organizations: ORGANIZATIONS,
    currentOrganization: CURRENT_ORGANIZATION,
    onSelect: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [selected, setSelected] = useState(CURRENT_ORGANIZATION);

  const handleSelectOrganization = (organization: Organization) => {
    setSelected(organization);
  };

  return (
    <MenuOrganization
      organizations={ORGANIZATIONS}
      currentOrganization={selected}
      onSelect={handleSelectOrganization}
      onAddOrganization={() => {}}
    />
  );
};

export const NoOrganizations = () => {
  return (
    <MenuOrganization
      organizations={[]}
      currentOrganization={null}
      onSelect={() => {}}
      onAddOrganization={() => {}}
    />
  );
};
