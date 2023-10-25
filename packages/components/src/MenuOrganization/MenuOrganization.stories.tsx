import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { MenuOrganization, MenuOrganizationProps } from './MenuOrganization';
import { Organization } from './types';

export const CURRENT_ORGANIZATION = {
  name: 'АО Калуга-Астрал',
  inn: '1231312312',
  kpp: '1231231231',
  id: '2',
};

export const ORGANIZATIONS = [
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

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=6636-99860&mode=design&t=ZdnzBPdIiPvPyVhQ-0)
 * ### [Guide]()
 */
const meta: Meta<typeof MenuOrganization> = {
  title: 'Components/MenuOrganization',
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
