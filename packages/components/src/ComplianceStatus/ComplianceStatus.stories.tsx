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
      title="Требования к паролю"
      itemsList={[
        {
          status: 'default',
          text: 'Латинские символы разного регистра (A-Z, a-z)',
        },
        {
          status: 'default',
          text: 'Не менее 8 символов',
        },
        {
          status: 'success',
          text: 'Арабские цифры (0-9)',
        },
        {
          status: 'reject',
          text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)',
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
      title="Требования к паролю"
      itemsList={[
        {
          status: 'default',
          text: 'Латинские символы разного регистра (A-Z, a-z)',
        },
        {
          status: 'default',
          text: 'Не менее 8 символов',
        },
        {
          status: 'success',
          text: 'Арабские цифры (0-9)',
        },
        {
          status: 'reject',
          text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)',
        },
      ]}
    >
      <Typography>
        Пожалуйста, убедитесь что введенное значение соответствует правилам,
        указанными выше
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
      title="Требования к паролю"
      subtitle={
        <Typography>
          Пожалуйста, убедитесь что введенное значение соответствует указанными
          ниже правилам
        </Typography>
      }
      itemsList={[
        {
          status: 'default',
          text: 'Латинские символы разного регистра (A-Z, a-z)',
        },
        {
          status: 'default',
          text: 'Не менее 8 символов',
        },
        {
          status: 'success',
          text: 'Арабские цифры (0-9)',
        },
        {
          status: 'reject',
          text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)',
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
      title="Требования к паролю"
      backgroundColor="primary"
      itemsList={[
        {
          status: 'default',
          text: 'Латинские символы разного регистра (A-Z, a-z)',
        },
        {
          status: 'default',
          text: 'Не менее 8 символов',
        },
        {
          status: 'success',
          text: 'Арабские цифры (0-9)',
        },
        {
          status: 'reject',
          text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)',
        },
      ]}
    />
  );
};
