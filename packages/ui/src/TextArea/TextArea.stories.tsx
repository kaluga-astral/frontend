import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { TextArea } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

const Template: Story = ({ readOnly, ...args }) => {
  return (
    <TextArea
      InputProps={{
        readOnly,
      }}
      {...args}
    />
  );
};

export const Showcase: Story = () => {
  return (
    <Stack gap={4}>
      <Stack gap={4} direction="row">
        <TextArea label="With label" fullWidth />
        <TextArea
          label="With placeholder"
          placeholder="Placeholder value"
          fullWidth
        />
        <TextArea
          focused
          label="Focused"
          defaultValue="Default value"
          fullWidth
        />
      </Stack>
      <Stack gap={4} direction="row">
        <TextArea
          error
          label="Invalid without helperText"
          defaultValue="Default value"
          fullWidth
        />
        <TextArea
          error
          label="Invalid"
          defaultValue="Default value"
          helperText="Ошибка, проверка не пройдена"
          fullWidth
        />
        <TextArea
          error
          focused
          label="Focused invalid"
          defaultValue="Default value"
          helperText="Ошибка, проверка не пройдена"
          fullWidth
        />
      </Stack>
      <Stack gap={4} direction="row">
        <TextArea
          success
          label="Validated"
          defaultValue="Default value"
          helperText="Проверка успешно пройдена"
          fullWidth
        />
        <TextArea
          disabled
          label="Disabled"
          defaultValue="Default value"
          fullWidth
        />
        <TextArea
          label="Read only"
          defaultValue="Default value"
          InputProps={{
            readOnly: true,
          }}
          helperText="Iam readOnly"
          fullWidth
        />
      </Stack>
    </Stack>
  );
};

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  fullWidth: false,
  label: 'label',
  placeholder: 'placeholder',
  helperText: 'helperText',
  focused: false,
  error: false,
  success: false,
  disabled: false,
  readOnly: false,
  minRows: undefined,
  maxRows: undefined,
  rows: undefined,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
