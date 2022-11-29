import { useState } from 'react';
import { Story } from '@storybook/react';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  styled,
} from '..';

import { Dialog } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Subtitle = styled(Typography)`
  &::before {
    padding: ${({ theme }) => theme.spacing(0, 4)};

    color: ${({ theme }) => theme.palette.grey[500]};

    content: '|';
  }
`;

const Template: Story = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="light" onClick={handleClickOpen}>
        Dialog
      </Button>
      <Dialog
        title={
          <>
            Заголовок
            <Subtitle variant="ui">Подзаголовок</Subtitle>
          </>
        }
        open={open}
        onClose={handleClose}
      >
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
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
