import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from '@mui/material';

import { Grid } from '../Grid';

import { MaskField } from './MaskField';

/**
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=95-0&mode=design)
 * ### [Guide]()
 */
const meta: Meta<typeof MaskField> = {
  title: 'Components/Inputs/MaskField',
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
    <MaskField
      label="Введите номер телефона"
      mask="+7 (000) 000-00-00"
      placeholder="+7 (000) 000-00-00"
    />
  );
};

export const Label = () => (
  <Grid container rows={2}>
    <MaskField placeholder="With label" label="Label" mask={Date} />
    <MaskField placeholder="Without label" mask={Date} />
  </Grid>
);

export const MaskIncludesLetters = () => (
  <MaskField
    label="Маска может содержать буквы"
    mask="aa.000.aaaaa"
    placeholder="aa.aaa.aaaaa"
  />
);

export const Placeholder = () => (
  <Grid container rows={2}>
    <MaskField label="With placeholder" mask="aa.000" placeholder="aa.000" />
    <MaskField label="Without placeholder" mask="aa.000" />
  </Grid>
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

/**
 * Prop ```unmask``` - работает в комбинации с пропсом `mask`, позволяет включить/отключить маску. По дефолту в value попадают данные без маски.
 */

export const Unmask = () => {
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
    <>
      <MaskField
        key={String(unmasked)}
        label="With mask/unmask"
        mask="aa.0000-000"
        placeholder="aa.0000-000"
        value={value}
        onChange={handleValueChange}
        unmask={unmasked}
      />
      Mask/unmask: <Switch onChange={handleSwitchChange} checked={unmasked} />
      Value: {value}
    </>
  );
};
