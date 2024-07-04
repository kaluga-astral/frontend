import { type Meta, type StoryObj } from '@storybook/react';
import { type MouseEvent, useState } from 'react';

import { ToggleButton } from '../ToggleButton';
import { styled } from '../styles';
import { Paper } from '../Paper';
import { Typography } from '../Typography';
import { Grid } from '../Grid';

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

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Interaction: Story = {
  args: {
    color: 'primary',
    children: [
      <ToggleButton value="val1" key="val1">
        Toggle Button 1
      </ToggleButton>,
      <ToggleButton value="val2" key="val2">
        Toggle Button 2
      </ToggleButton>,
      <ToggleButton value="val3" key="val3" disabled>
        Toggle Button 3
      </ToggleButton>,
    ],
    value: 'val1',
    exclusive: true,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

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

export const Orientation = () => (
  <Grid spacing={6}>
    <ToggleButtonGroup orientation="horizontal" value="val2">
      <ToggleButton value="val1">horizontal 1</ToggleButton>
      <ToggleButton value="val2">horizontal 2</ToggleButton>
      <ToggleButton value="val3">horizontal 3</ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup orientation="vertical" value="val2">
      <ToggleButton value="val1">vertical 1</ToggleButton>
      <ToggleButton value="val2">vertical 2</ToggleButton>
      <ToggleButton value="val3">vertical 3</ToggleButton>
    </ToggleButtonGroup>
  </Grid>
);

export const Exclusive = () => {
  const [value1, setValue1] = useState(['val1']);
  const [value2, setValue2] = useState('val1');
  const handleChange1 = (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setValue1(selectedValue);
    }
  };
  const handleChange2 = (
    _event: MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setValue2(selectedValue);
    }
  };

  return (
    <Grid spacing={6}>
      <Typography>Default</Typography>
      <ToggleButtonGroup onChange={handleChange1} value={value1}>
        <ToggleButton value="val1">Toggle button</ToggleButton>
        <ToggleButton value="val2">Toggle button</ToggleButton>
        <ToggleButton value="val3">Toggle button</ToggleButton>
      </ToggleButtonGroup>

      <Typography>Exclusive</Typography>
      <ToggleButtonGroup exclusive onChange={handleChange2} value={value2}>
        <ToggleButton value="val1">Toggle button</ToggleButton>
        <ToggleButton value="val2">Toggle button</ToggleButton>
        <ToggleButton value="val3">Toggle button</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
