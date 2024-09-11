import { type Meta, type StoryObj } from '@storybook/react';

import { HintIcon } from './HintIcon';

const meta: Meta<typeof HintIcon> = {
  title: 'Components/HintIcon',
  component: HintIcon,
};

export default meta;

type Story = StoryObj<typeof HintIcon>;

export const Interaction: Story = {
  args: {
    variant: 'info',
    iconOption: {
      variant: 'fill',
      color: 'warning',
    },
    title: 'Безопасность',
    note: 'Последнее изменение пароля быо больше полугода назад',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <>
      <HintIcon
        variant="question"
        iconOption={{ color: 'warning' }}
        title="1231"
        note="321321321"
      />
      <HintIcon
        variant="question"
        iconOption={{ variant: 'fill', color: 'warning' }}
        title="1231"
        note="321321321"
      />
      <HintIcon
        variant="info"
        iconOption={{ color: 'warning' }}
        title="1231"
        note="321321321"
      />
      <HintIcon
        variant="info"
        iconOption={{ variant: 'fill', color: 'warning' }}
        title="1231"
        note="321321321"
      />
    </>
  );
};
