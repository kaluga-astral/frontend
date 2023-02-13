import { Stack } from '@mui/material';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { CheckableTag } from './CheckableTag';

export default {
  title: 'Components/CheckableTag',
  component: CheckableTag,
};

const Template: Story = (args) => <CheckableTag {...args} />;

export const ShowcaseColor: Story = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack direction="column" gap={2}>
      <CheckableTag
        label="Checkable tag"
        color="error"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        rounded
        color="warning"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        color="primary"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        rounded
        color="success"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="error"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        variant="contained"
        rounded
        color="warning"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        variant="contained"
        color="primary"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        variant="contained"
        rounded
        color="success"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable tag"
        variant="contained"
        rounded
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      <CheckableTag
        label="Checkable disabled tag"
        variant="contained"
        rounded
        disabled
        color="success"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
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
  rounded: true,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
