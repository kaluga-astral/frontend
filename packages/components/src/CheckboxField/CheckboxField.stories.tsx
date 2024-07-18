import { type Meta, type StoryObj } from '@storybook/react';

import { CheckboxField } from './CheckboxField';

const meta: Meta<typeof CheckboxField> = {
  title: 'Components/CheckboxField',
  component: CheckboxField,
};

export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Interaction: Story = {
  args: {
    label: 'Текст',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return <CheckboxField label="Текст" helperText={'helper text'} />;
};

export const Default = () => <CheckboxField label="Текст (default)" />;

export const HelperText = () => (
  <CheckboxField label="Текст (helper text)" helperText={'helper text'} />
);

export const Error = () => (
  <CheckboxField label="Текст (error)" helperText={'helper text'} isError />
);

export const ErrorTooltip = () => (
  <CheckboxField
    label="Текст (error, tooltip)"
    helperText={'helper text'}
    isError
    hideHelperText
  />
);

export const Success = () => (
  <CheckboxField label="Текст (success)" helperText={'helper text'} isSuccess />
);
