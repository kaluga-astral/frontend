import { type Meta, type StoryObj } from '@storybook/react';
import { Paper } from '@mui/material';

import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { FormControlLabel } from '../FormControlLabel';
import { Grid } from '../Grid';

import { Switch } from './Switch';

/**
 * Switch — переключатель — включает или выключает состояние отдельной настройки.
 * Данный компонент можно использовать при необходимости включения/отключения какой-либо функции в сервисе.
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=574-76885)
 * ### [Guide]()
 */
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Interaction: Story = {
  args: {
    color: 'primary',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <>
      <Paper style={{ width: 500 }}>
        <DialogTitle variant="h5">Настройки</DialogTitle>
        <DialogContent>
          <LegacyGrid
            container
            templateColumns="auto auto"
            justifyContent="space-between"
          >
            <Typography>Отображать отклоненные заявления</Typography>
            <Switch size="small" />
          </LegacyGrid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Paper>
    </>
  );
};

/**
 * Переключатель имеет два состояния: выключен и включен.
 */
export const Types = () => (
  <Grid container columns={2}>
    <Switch />
  </Grid>
);

export const Checked = () => (
  <Grid container columns={2}>
    <Switch checked />
  </Grid>
);

export const Disabled = () => (
  <Grid container columns={2}>
    <Switch disabled />
    <Switch checked disabled />
  </Grid>
);

/**
 * Компонент переключателя используется в интерфейсе с поясняющим текстом.
 */
export const SwitchWithText = () => (
  <Grid container spacing={4} columns={4}>
    <FormControlLabel
      control={<Switch />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
    />
    <FormControlLabel
      control={<Switch />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
      labelPlacement="start"
    />

    <FormControlLabel
      control={<Switch />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
    />
    <FormControlLabel
      control={<Switch />}
      disabled
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
      labelPlacement="start"
    />

    <FormControlLabel
      control={<Switch checked />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
    />
    <FormControlLabel
      control={<Switch checked />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
      labelPlacement="start"
    />

    <FormControlLabel
      control={<Switch checked />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
      disabled
    />
    <FormControlLabel
      control={<Switch checked />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
      labelPlacement="start"
      disabled
    />
  </Grid>
);

/**
 * Переключатель имеет несколько размеров: small, medium.
 */
export const Sizes = () => (
  <Grid container spacing={4} columns={2}>
    <Switch size="small" />
    <FormControlLabel control={<Switch size="small" />} label="Text" />
    <Switch />
    <FormControlLabel
      control={<Switch />}
      label={
        <Typography variant="subtitle1" component="span">
          Text
        </Typography>
      }
    />
  </Grid>
);
