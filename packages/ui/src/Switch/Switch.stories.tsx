import { Story } from '@storybook/react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '../Typography';
import { Grid } from '../Grid';
import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { DialogTitle } from '../DialogTitle';
import { FormControlLabel } from '../FormControlLabel';
import { ExampleTemplate } from '../docs/ExampleTemplate';

import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const SwitchShowcase: Story = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const autoFlow = matches ? 'row' : 'column';

  return (
    <ExampleTemplate>
      <Typography paragraph variant="h3">
        Switch
      </Typography>
      <Typography paragraph>
        Switch — переключатель — включает или выключает состояние отдельной
        настройки.
      </Typography>
      <Typography>
        Данный компонент можно использовать при необходимости
        включения/отключения какой-либо функции в сервисе.
      </Typography>
      <br />
      <br />
      <Typography variant="h4" paragraph>
        Типы компонента
      </Typography>

      <ExampleTemplate.Case
        title="Switch"
        descriptionList={[
          'Переключатель имеет два состояния: выключен и включен.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
          templateColumns="auto auto"
          templateRows="auto auto"
        >
          <Switch />
          <Switch checked />
          <Switch disabled />
          <Switch checked disabled />
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Switch+text"
        descriptionList={[
          'Компонент переключателя используется в интерфейсе с поясняющим текстом.',
          'Переключатель может располагаться слева и справа от текста. Отступ между текстом и переключателем по умолчанию 8px, но может и отличаться от этого значения в зависимости от сетки страницы.',
          'Пример использования: включить отображение сервисных  уведомлений.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
          templateRows="auto auto"
        >
          <FormControlLabel control={<Switch />} label="Text" />
          <FormControlLabel
            control={<Switch />}
            label="Text"
            labelPlacement="start"
          />

          <FormControlLabel control={<Switch />} disabled label="Text" />
          <FormControlLabel
            control={<Switch />}
            disabled
            label="Text"
            labelPlacement="start"
          />

          <FormControlLabel control={<Switch checked />} label="Text" />
          <FormControlLabel
            control={<Switch checked />}
            label="Text"
            labelPlacement="start"
          />

          <FormControlLabel
            control={<Switch checked />}
            label="Text"
            disabled
          />
          <FormControlLabel
            control={<Switch checked />}
            label="Text"
            labelPlacement="start"
            disabled
          />
        </Grid>
      </ExampleTemplate.Case>

      <ExampleTemplate.Case
        title="Size"
        descriptionList={[
          'Переключатель имеет несколько размеров: small, medium.',
        ]}
      >
        <Grid
          container
          justifyContent="center"
          autoFlow={autoFlow}
          spacing={4}
          templateRows="auto auto"
        >
          <Switch size="small" />
          <FormControlLabel control={<Switch size="small" />} label="Text" />

          <Switch />
          <FormControlLabel control={<Switch />} label="Text" />
        </Grid>
      </ExampleTemplate.Case>

      <Typography variant="h5" paragraph>
        Пример использования
      </Typography>
      <Paper style={{ width: 500 }}>
        <DialogTitle variant="h5">Настройки</DialogTitle>
        <DialogContent>
          <Grid
            container
            templateColumns="auto auto"
            justifyContent="space-between"
          >
            <Typography>Отображать отклоненные заявления</Typography>
            <Switch size="small" />
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Paper>
    </ExampleTemplate>
  );
};

SwitchShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <Switch {...args} />;

export const SwitchStory = Template.bind({});

SwitchStory.storyName = 'Switch';

SwitchStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
