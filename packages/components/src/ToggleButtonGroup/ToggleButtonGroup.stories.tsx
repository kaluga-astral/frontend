import { type Meta } from '@storybook/react';
import { type MouseEvent, useState } from 'react';

import { ToggleButton } from '../ToggleButton';
import { styled } from '../styles';
import { Paper } from '../Paper';
import { Typography } from '../Typography';

import { ToggleButtonGroup } from './ToggleButtonGroup';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=14005%3A156527&mode=design&t=8ycJptcUyE1sU6EI-1)
 * ### [Guide]()
 */

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export default meta;

const ExamplePaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)};
`;

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
    <ExamplePaper>
      <Typography variant="overline" component="h2" gutterBottom>
        Сведения о представителе
      </Typography>
      <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
        <ToggleButton value="val1">Юридическое лицо</ToggleButton>
        <ToggleButton value="val2">Индивидуальный предприниматель</ToggleButton>
        <ToggleButton value="val3">Физическое лицо</ToggleButton>
      </ToggleButtonGroup>
    </ExamplePaper>
  );
};
