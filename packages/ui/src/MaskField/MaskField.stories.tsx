import React from 'react';
import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { MaskField } from './MaskField';

export default {
  title: 'Components/MaskField',
  component: MaskField,
};

const Template: Story = () => {
  return (
    <Stack>
      <MaskField label="textfield without mask" />
      <MaskField
        label="textfield with custom mask"
        mask="aa.000"
        placeholder="aa.000"
      />
      <MaskField
        label="textfield with custom mask"
        mask="+7 (000) 000-00-00"
        placeholder="+7 (000) 000-00-00"
      />
      <MaskField label="textfield with number mask" mask={Number} />
      <MaskField label="textfield with string mask" mask={String} />
      <MaskField label="textfield with date mask" mask={Date} />
    </Stack>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
