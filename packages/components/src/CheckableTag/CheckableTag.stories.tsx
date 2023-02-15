import { Stack } from '@mui/material';
import { Story } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { TagBadge, TagBadgeProps } from '../TagBadge';

import { CheckableTag } from './CheckableTag';

export default {
  title: 'Components/CheckableTag',
  component: CheckableTag,
};

const Template: Story = (args) => <CheckableTag {...args} />;

export const ShowcaseColor: Story = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) =>
    setChecked(event.target.checked);

  const baseProps = {
    checked,
    onChange: handleChecked,
    endAddon: (props: TagBadgeProps) => (
      <TagBadge {...props} badgeContent={'12'} />
    ),
  };

  return (
    <Stack direction="column" gap={2}>
      <CheckableTag label="Checkable tag" color="error" {...baseProps} />
      <CheckableTag label="Checkable tag" color="warning" {...baseProps} />
      <CheckableTag label="Checkable tag" color="primary" {...baseProps} />
      <CheckableTag label="Checkable tag" color="success" {...baseProps} />
      <CheckableTag label="Checkable tag" variant="text" {...baseProps} />
      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="error"
        {...baseProps}
      />
      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="warning"
        {...baseProps}
      />
      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="primary"
        {...baseProps}
      />
      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="success"
        {...baseProps}
      />
      <CheckableTag
        label="Checkable disabled tag"
        variant="contained"
        color="success"
        disabled
        {...baseProps}
      />
    </Stack>
  );
};

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  variant: 'light',
  color: 'success',
  label: 'Тэг Checkable',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
