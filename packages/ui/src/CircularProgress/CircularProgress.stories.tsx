import { Story } from "@storybook/react";

import { CircularProgress } from "./CircularProgress";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
};

const Template: Story = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  size: "medium",
};

Default.parameters = {
  controls: { expanded: true },
};
