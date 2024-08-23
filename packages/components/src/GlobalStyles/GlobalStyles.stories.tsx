import { type Meta, type StoryObj } from '@storybook/react';

import { GlobalStyles } from './GlobalStyles';

const meta: Meta<typeof GlobalStyles> = {
  title: 'Components/GlobalStyles',
  component: GlobalStyles,
};

export default meta;

type Story = StoryObj<typeof GlobalStyles>;

export const Interaction: Story = {
  args: {
    children: (
      <div style={{ width: '150vw', height: '150vh' }}>
        Съешь же ещё этих мягких французских булок да выпей чаю
      </div>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <GlobalStyles enableColorScheme={false}>
    <div style={{ width: '150vw', height: '150vh' }}>
      Съешь же ещё этих мягких французских булок да выпей чаю
    </div>
  </GlobalStyles>
);
