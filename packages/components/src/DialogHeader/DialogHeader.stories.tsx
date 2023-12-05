import { useState } from 'react';
import { type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { DialogActions } from '../DialogActions';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { Grid } from '../Grid';
import { Tag } from '../Tag';
import { Dialog } from '../Dialog/Dialog';

import { DialogHeader } from './DialogHeader';

type Story = StoryObj<typeof DialogHeader>;

export default {
  title: 'Components/DialogHeader',
  component: DialogHeader,
};

export const Interaction: Story = {
  args: {
    title: 'Заголовок диалога',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Template = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid>
        <Button variant="light" onClick={handleClickOpen}>
          DialogHeader
        </Button>
      </Grid>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogHeader title="Заголовок" onClose={handleClose}>
          <Tag variant="light" label="Light Tag" color="primary" />
          <Button variant="contained" color="primary">
            Button
          </Button>
        </DialogHeader>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Демонстрация диалога с компонентом DialogHeader, который позволяет
            добавлять другие компоненты в заголовок диалога.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export const Default = Template.bind({});
