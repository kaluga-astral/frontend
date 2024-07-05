import { type ChangeEvent, Children, useState } from 'react';
import { Box, Paper, Switch } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';

import { FormControlLabel } from '../FormControlLabel';
import { Grid } from '../Grid';

import { Slide } from './Slide';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Slide> = {
  title: 'Components/Slide',
  component: Slide,
};

export default meta;

type Story = StoryObj<typeof Slide>;

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export const Interaction: Story = {
  args: {
    direction: 'up',
    in: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: icon,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ width: 'calc(100px + 16px)' }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </>
  );
};

export const Direction = () => {
  const [checkedUp, setCheckedUp] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);
  const [checkedDown, setCheckedDown] = useState(false);
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [slideDirection, setSlideDirection] = useState<
    'left' | 'right' | 'up' | 'down'
  >('up');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    direction?: 'left' | 'right' | 'up' | 'down',
  ) => {
    switch (direction) {
      case 'up':
        setCheckedUp(event.target.checked);

        break;
      case 'right':
        setCheckedRight(event.target.checked);

        break;
      case 'down':
        setCheckedDown(event.target.checked);

        break;
      case 'left':
        setCheckedLeft(event.target.checked);

        break;
      default:
        break;
    }

    direction && setSlideDirection(direction);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 'calc(100px + 16px)' }}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedUp}
              onChange={(e) => handleChange(e, 'up')}
            />
          }
          label="Up"
        />
        <Slide
          direction={slideDirection}
          in={checkedUp}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
      </Box>
      <Box sx={{ width: 'calc(100px + 16px)' }}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedRight}
              onChange={(e) => handleChange(e, 'right')}
            />
          }
          label="Right"
        />
        <Slide
          direction={slideDirection}
          in={checkedRight}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
      </Box>
      <Box sx={{ width: 'calc(100px + 16px)' }}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedDown}
              onChange={(e) => handleChange(e, 'down')}
            />
          }
          label="Down"
        />
        <Slide
          direction={slideDirection}
          in={checkedDown}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
      </Box>
      <Box sx={{ width: 'calc(100px + 16px)' }}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedLeft}
              onChange={(e) => handleChange(e, 'left')}
            />
          }
          label="Left"
        />
        <Slide
          direction={slideDirection}
          in={checkedLeft}
          mountOnEnter
          unmountOnExit
        >
          {icon}
        </Slide>
      </Box>
    </Box>
  );
};
