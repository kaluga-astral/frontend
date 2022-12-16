import React from 'react';
import { Stack, Switch } from '@mui/material';
import { Story } from '@storybook/react';

import { MaskField } from './MaskField';

export default {
  title: 'Components/MaskField',
  component: MaskField,
};

const Template: Story = () => {
  const [value, setValue] = React.useState('');
  const [unmasked, setUnmasked] = React.useState(true);

  const handleValueChange = (fieldValue: string) => {
    setValue(fieldValue);
  };
  const handleSwitchChange = () => {
    setValue('');
    setUnmasked((prevState) => !prevState);
  };

  return (
    <Stack>
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
      <MaskField
        label="textfield with regexp mask"
        placeholder="Postal code"
        mask={/^[1-6]\d{0,5}$/}
      />
      <MaskField
        label="textfield with definitions"
        mask={'XXX - XXXXXX'}
        placeholder={'XXX - XXXXXX'}
        definitions={{ X: /[a-zA-Z0-9]/ }}
      />

      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
      >
        <MaskField
          key={String(unmasked)}
          label="textfield with mask/unmask"
          mask="aa.0000-000"
          placeholder="aa.0000-000"
          value={value}
          onChange={handleValueChange}
          unmask={unmasked}
        />
        <Switch onChange={handleSwitchChange} checked={unmasked} />
        Value: {value}
      </div>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
