import { type Meta, type StoryObj } from '@storybook/react';

import { FlowButton } from './FlowButton';

/**
 * FlowButton — это кнопка для запуска/продолжения пользовательского сценария.
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof FlowButton> = {
  title: 'Components/FlowButton',
  component: FlowButton,
};

export default meta;

type Story = StoryObj<typeof FlowButton>;

export const Interaction: Story = {
  args: {
    children: 'Выпустить УНЭП',
  },
  parameters: {
    docs: {
      disable: true,
    },
    options: {
      showPanel: true,
    },
    controls: {
      expanded: true,
    },
  },
};

export const Example = () => (
  <FlowButton targetText="Далее" color="primary">
    Выпустить УНЭП
  </FlowButton>
);

export const Loading = () => (
  <FlowButton loading targetText="Завершить" color="primary">
    Выпустить УНЭП
  </FlowButton>
);

export const TargetText = () => (
  <FlowButton targetText="Пропустить" color="success">
    Пропустить этот шаг
  </FlowButton>
);

export const Color = () => (
  <>
    <FlowButton targetText="Начальный" color="primary">
      Primary
    </FlowButton>
    <FlowButton targetText="Успех" color="success">
      Success
    </FlowButton>
    <FlowButton targetText="Ошибка" color="error">
      Error
    </FlowButton>
    <FlowButton targetText="Предупреждение" color="warning">
      Warning
    </FlowButton>
  </>
);
