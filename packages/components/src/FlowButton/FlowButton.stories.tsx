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

export const TargetText = () => (
  <FlowButton targetText="Пропустить" color="success">
    Пропустить этот шаг
  </FlowButton>
);

export const Colors = () => (
  <>
    <FlowButton targetText="Начальный" color="primary">
      Синий цвет
    </FlowButton>
    <FlowButton targetText="Успех" color="success">
      Зелёный цвет
    </FlowButton>
    <FlowButton targetText="Ошибка" color="error">
      Красный цвет
    </FlowButton>
    <FlowButton targetText="Предупреждение" color="warning">
      Оранжевый цвет
    </FlowButton>
  </>
);
