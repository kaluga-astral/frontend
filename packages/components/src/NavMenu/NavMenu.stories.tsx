import { type Meta, type StoryObj } from '@storybook/react';
import { CompanyOutlineMd, ProfileOutlineMd } from '@astral/icons';

import { OverflowTypography } from '../OverflowTypography';

import { NavMenu } from './NavMenu';

/**
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof NavMenu> = {
  title: 'Components/NavMenu',
  component: NavMenu,
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Interaction: Story = {
  args: {
    items: [
      [
        'item 1',
        {
          icon: <ProfileOutlineMd />,
          text: 'item 1',
        },
      ],
      [
        'item 2',
        {
          icon: <CompanyOutlineMd />,
          text: 'item 2',
          active: true,
        },
      ],
      [
        'item 3',
        {
          icon: <CompanyOutlineMd />,
          text: 'item 3',
        },
      ],
      [
        'item 4',
        {
          icon: <ProfileOutlineMd />,
          text: 'item 4',
        },
      ],
    ],
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
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

/**
 * text props - ReactNode, поэтому вместо string можно передать любой компонент
 */
export const OverflowText = () => {
  return (
    <NavMenu
      items={[
        [
          'incoming-documents',
          {
            icon: <ProfileOutlineMd />,
            text: (
              <OverflowTypography
                tooltipProps={{ placement: 'right' }}
                style={{ width: '150px' }}
              >
                Входящие документы Иванова Ивана Васильевича
              </OverflowTypography>
            ),
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
