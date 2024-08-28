import { type Meta, type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { ComplianceStatus } from './ComplianceStatus';

/**
 * ComplianceStatus - это компонент, позволяющий отображать статусы прохождения сложных валидаций
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=29582-27134)
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

/**
 * Пропс предназначенный для изменения фонового цвета, по умолчанию имеет значение "grey"
 */
export const BackgroundColor = () => {
  return (
    <ComplianceStatus
      title="Lorem ipsum"
      backgroundColor="primary"
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
