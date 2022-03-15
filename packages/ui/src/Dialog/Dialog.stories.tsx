import React from 'react';
import { Story } from '@storybook/react';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '../index';

import { Dialog } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Template: Story = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="light" onClick={handleClickOpen}>
        Dialog
      </Button>
      <Dialog title="Заголовок" open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень выжный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
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
    </div>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
