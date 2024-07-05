import { type Meta, type StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import { CheckboxField } from './CheckboxField';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof CheckboxField> = {
  title: 'Components/CheckboxField',
  component: CheckboxField,
};

export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Interaction: Story = {
  args: {
    label: "Текст"
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <Stack gap={4} mx={2}>
      <CheckboxField label="Текст (default)" />
      <CheckboxField
        label="Текст (helper text)"
        helperText={'helper text'}
      />
      <CheckboxField
        label="Текст (error)"
        helperText={'helper text'}
        isError
      />
      <CheckboxField
        label="Текст (error, tooltip)"
        helperText={'helper text'}
        isError
        hideHelperText
      />
      <CheckboxField
        label="Текст (success)"
        helperText={'helper text'}
        isSuccess
      />
    </Stack>
  );
};
