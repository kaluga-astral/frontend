import React from 'react';
import { type StoryObj } from '@storybook/react';
import { SettingsOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { Grid } from '../Grid';
import { IconButton } from '../IconButton';
import { Tag } from '../Tag';
import { Typography } from '../Typography';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';
import { SideDialog } from '../SideDialog';

import { SideDialogHeader } from '.';

export default {
  title: 'Components/SideDialogHeader',
  component: SideDialogHeader,
};

type Story = StoryObj<typeof SideDialogHeader>;

export const Interaction: Story = {
  args: {
    title: 'Заголовок',
    disableSpacing: false,
    justifyContent: 'flex-start',
    onClose: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const SideDialogWithHeader = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2} rows={2}>
      <Typography>
        Пример SideDialog с компонентом SideDialogHeader, который является
        оберткой для размещения прочих компонентов в заголовке.
      </Typography>
      <Grid>
        <Button variant="light" onClick={handleOpen}>
          Open
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
