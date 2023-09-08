import { Meta } from '@storybook/react';
import { MouseEvent, useState } from 'react';

import { ToggleButtonGroup } from '../ToggleButtonGroup';
import { Grid } from '../Grid';
import { Typography } from '../Typography';

import { ToggleButton } from './';

/**
 * Используется в форме заполнения данных для переключения блока данных.
 * Группируется с помощью компонента [ToggleButtonGroup](?path=/story/components-togglebuttongroup--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1-347&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};

export default meta;

export const Example = () => {
  const [value, setValue] = useState('val1');

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };

  return (
    <>
      <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
        <ToggleButton value="val1">Toggle Button</ToggleButton>
        <ToggleButton value="val2">Toggle Button</ToggleButton>
        <ToggleButton value="val3" disabled={true}>
          Toggle Button
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export const Size = () => (
  <Grid spacing={6}>
    <ToggleButtonGroup>
      <ToggleButton value="val1" size="small">
        Small
      </ToggleButton>
      <ToggleButton value="val1" size="medium">
        Medium
      </ToggleButton>
      <ToggleButton value="val1" size="large">
        Large
      </ToggleButton>
    </ToggleButtonGroup>
  </Grid>
);

export const Colors = () => {
  const [value, setValue] = useState('val1');

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };

  return (
    <>
      <Grid container spacing={6}>
        <Typography>
          Меняет цвет, если ToggleButton находится в состоянии 'active'
        </Typography>
        <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
          <ToggleButton value="val1" color="primary">
            Primary
          </ToggleButton>
          <ToggleButton value="val2" color="secondary">
            Secondary
          </ToggleButton>
          <ToggleButton value="val3" color="error">
            Error
          </ToggleButton>
          <ToggleButton value="val4" color="success">
            Success
          </ToggleButton>
          <ToggleButton value="val5" color="warning">
            Warning
          </ToggleButton>
          <ToggleButton value="val6" color="info">
            Info
          </ToggleButton>
          <ToggleButton value="val7" color="standard">
            Standard
          </ToggleButton>
          <ToggleButton value="val8" disabled={true}>
            Disabled
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};
