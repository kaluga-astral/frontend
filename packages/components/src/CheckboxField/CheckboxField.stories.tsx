import { type StoryFn } from '@storybook/react';
import { Stack } from '@mui/material';

import { ExampleTemplate } from '../docs';

import { CheckboxField } from './CheckboxField';

export default {
  title: 'Components/CheckboxField',
  component: null,
};

const Template: StoryFn = () => {
  return (
    <ExampleTemplate>
      <ExampleTemplate.Case title="CheckboxField">
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
      </ExampleTemplate.Case>
    </ExampleTemplate>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
