import { Story } from '@storybook/react';

import { GlobalStyles } from './GlobalStyles';

export default {
  title: 'Components/GlobalStyles',
  component: GlobalStyles,
};

const Template: Story = (args) => (
  <GlobalStyles {...args}>
    Съешь же ещё этих мягких французских булок да выпей чаю
  </GlobalStyles>
);

export const Showcase = Template.bind({});
Showcase.args = {
  enableColorScheme: false,
};
Showcase.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
