import { Story } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Дата начала:',
  mask: 'ru',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
