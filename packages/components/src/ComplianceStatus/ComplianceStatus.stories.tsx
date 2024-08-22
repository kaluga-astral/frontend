import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { ComplianceStatus } from './ComplianceStatus';

/**
 * ComplianceStatus - это компонент, позволяющий отображать статусы прохождения сложных валидаций
 *
 * ### [Guide]()
 */

const meta: Meta<typeof ComplianceStatus> = {
  title: 'Components/ComplianceStatus',
  component: ComplianceStatus,
};

export default meta;

type Story = StoryObj<typeof ComplianceStatus>;

export const Interaction: Story = {
  args: {
    itemsList: [
      {
        status: 'default',
        text: 'Lorem ipsum dolor sit.',
      },
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
    <ComplianceStatus
      title="Lorem ipsum"
      itemsList={[
        {
          status: 'default',
          text: 'Lorem ipsum dolor sit.',
        },
        {
          status: 'success',
          text: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        {
          status: 'reject',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dicta?',
        },
      ]}
    />
  );
};

/**
 * Пропс для добавления контента после списка
 */
export const Children = () => {
  return (
    <ComplianceStatus
      title="Lorem ipsum"
      itemsList={[
        {
          status: 'default',
          text: 'Lorem ipsum dolor sit.',
        },
      ]}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut
        corporis cumque dignissimos dolore, fugiat, laudantium nam numquam
        perferendis, possimus quisquam quo vitae. Eos quas quisquam quos sit
        voluptate? Deleniti!
      </Typography>
    </ComplianceStatus>
  );
};

/**
 * Пропс для добавления контента между заголовком и списком
 */
export const Subtitle = () => {
  return (
    <ComplianceStatus
      title="Lorem ipsum"
      subtitle={
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aut corporis cumque dignissimos dolore, fugiat, laudantium nam numquam
          perferendis, possimus quisquam quo vitae. Eos quas quisquam quos sit
          voluptate? Deleniti!
        </Typography>
      }
      itemsList={[
        {
          status: 'default',
          text: 'Lorem ipsum dolor sit.',
        },
      ]}
    />
  );
};
