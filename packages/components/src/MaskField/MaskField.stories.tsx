import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stack, Switch } from '@mui/material';

import { Grid } from '../Grid';

import { MaskField } from './MaskField';

/**
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=95-0&mode=design)
 * ### [Guide]()
 */
const meta: Meta<typeof MaskField> = {
  title: 'Components/MaskField',
  component: MaskField,
};

export default meta;

type Story = StoryObj<typeof MaskField>;

export const Interaction: Story = {
  args: {
    label: 'Введите номер телефона',
    placeholder: '+7 (000) 000-00-00',
    mask: '+7 (000) 000-00-00',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <Stack>
      <MaskField
        label="Введите номер телефона"
        mask="+7 (000) 000-00-00"
        placeholder="+7 (000) 000-00-00"
      />
    </Stack>
  );
};

export const Label = () => (
  <Grid container rows={2}>
    <MaskField placeholder="With label" label="Label" mask={Date} />
    <MaskField placeholder="Without label" mask={Date} />
  </Grid>
);

export const Placeholder = () => (
  <MaskField label="With custom mask" mask="aa.000" placeholder="aa.000" />
);

/**
 * Prop ```definitions``` - работает в комбинации с пропсом `mask`, позволяет делать динамическую маску, в которой при удалении элементов, они заменяются подчеркиванием вместо смещения всего значения
 */
export const Definitions = () => (
  <MaskField
    label="With definitions"
    mask={'XXX - XXXXXX'}
    placeholder={'XXX - XXXXXX'}
    definitions={{ X: /[a-zA-Z0-9]/ }}
  />
);

export const Controlled = () => {
  const [value, setValue] = React.useState('');
  const [unmasked, setUnmasked] = React.useState(true);

  const handleValueChange = (fieldValue: string) => {
    setValue(fieldValue);
  };
  const handleSwitchChange = () => {
    setValue('');
    setUnmasked((prevState) => !prevState);
  };

  const checkIsMasked = () => (unmasked ? 'aa.0000-000' : '');

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
    >
      <MaskField
        key={String(unmasked)}
        label="With mask/unmask"
        mask={checkIsMasked()}
        placeholder={checkIsMasked()}
        value={value}
        onChange={handleValueChange}
      />
      Mask/unmask: <Switch onChange={handleSwitchChange} checked={unmasked} />
    </div>
  );
};
