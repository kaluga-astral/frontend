import { Stack } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';

import { TagBadge, type TagBadgeProps } from '../TagBadge';

import { CheckableTag } from './CheckableTag';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=427-5580&t=NrGSkPDdR1WstBqT-0)
 * ### [Guide]()
 */
const meta: Meta<typeof CheckableTag> = {
  title: 'Components/CheckableTag',
  component: CheckableTag,
};

export default meta;

type Story = StoryObj<typeof CheckableTag>;

export const Interaction: Story = {
  args: {
    variant: 'light',
    color: 'success',
    label: 'Тэг Checkable',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
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
