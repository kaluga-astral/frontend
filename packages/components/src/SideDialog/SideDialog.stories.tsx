import React from 'react';
import { StoryObj } from '@storybook/react';
import { SettingsOutlineMd } from '@astral/icons';

import { Alert, Button, Divider, Grid, IconButton, Tag, Typography } from '..';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';
import { SideDialogHeader } from '../SideDialogHeader';

import { SideDialog } from './SideDialog';

export default {
  title: 'Components/SideDialog',
  component: SideDialog,
};

type Story = StoryObj<typeof SideDialog>;

export const Interaction: Story = {
  args: {
    title: 'Заголовок страницы',
    open: false,
    onClose: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="light" onClick={handleOpen}>
        SideDialog
      </Button>
      <SideDialog title="Заголовок" open={open} onClose={handleClose}>
        <SideDialogContent>
          <Alert severity="warning">
            Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
            Quisque id diam vel quam.
          </Alert>
          <br />
          <SideDialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень выжный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Arcu cursus vitae congue mauris
            rhoncus aenean. Sit amet luctus venenatis lectus magna. Vitae auctor
            eu augue ut lectus arcu bibendum. Dui accumsan sit amet nulla
            facilisi morbi tempus. Condimentum lacinia quis vel eros donec. Dis
            parturient montes nascetur ridiculus. Purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Quisque id diam vel quam.
            Magna sit amet purus gravida quis blandit turpis cursus in. Dolor
            morbi non arcu risus. Sed cras ornare arcu dui vivamus arcu felis
            bibendum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Arcu cursus vitae congue mauris rhoncus aenean. Sit amet luctus
            venenatis lectus magna. Vitae auctor eu augue ut lectus arcu
            bibendum.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={handleClose}>Готово</Button>
        </SideDialogActions>
      </SideDialog>
    </div>
  );
};

export const ExampleWithSideDialogHeader = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Typography>
        Пример SideDialog с компонентом SideDialogHeader, который является
        оберткой для размещения прочих компонентов в заголовок диалога.
      </Typography>
      <Grid>
        <Button variant="light" onClick={handleOpen}>
          SideDialog with SideDialogHeader
        </Button>
      </Grid>
      <SideDialog open={open} onClose={handleClose}>
        <SideDialogHeader
          title="Заголовок"
          onClose={handleClose}
          justifyContent="flex-end"
        >
          <Tag variant="light" label="Важное" color="error" />
          <IconButton variant="text">
            <SettingsOutlineMd />
          </IconButton>
          <Divider orientation="vertical" />
        </SideDialogHeader>
        <SideDialogContent>
          <SideDialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            laboriosam doloremque aut nobis quam asperiores eveniet libero
            aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem
            veniam laudantium consequuntur architecto.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={handleClose}>Готово</Button>
        </SideDialogActions>
      </SideDialog>
    </Grid>
  );
};
