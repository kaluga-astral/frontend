import { type Meta } from '@storybook/react';
import { CompanyOutlineMd, ProfileOutlineMd } from '@astral/icons';

import { NavMenu } from './NavMenu';

export default {
  title: 'Components/NavMenu',
  component: NavMenu,
} as Meta<typeof NavMenu>;

export const Default = () => {
  return (
    <NavMenu
      items={[
        [
          'incoming-documents',
          {
            icon: <ProfileOutlineMd />,
            text: 'Входящие документы',
            active: true,
          },
        ],
        [
          'organizations',
          {
            icon: <CompanyOutlineMd />,
            text: 'Мои организации',
          },
        ],
      ]}
    />
  );
};
