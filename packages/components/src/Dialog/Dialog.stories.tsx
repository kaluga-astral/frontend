import { useState } from 'react';
import { Story } from '@storybook/react';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  LegacyGrid,
  Tag,
  Typography,
  styled,
} from '..';
import { DialogHeader } from '../DialogHeader';

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogWithHeaderOpen, setDialogWithHeaderOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpenDialogWithHeader = () => {
    setDialogWithHeaderOpen(true);
  };

  const handleCloseDialogWithHeader = () => {
    setDialogWithHeaderOpen(false);
  };

  return (
    <LegacyGrid container spacing={2}>
      <LegacyGrid>
        <Button variant="light" onClick={handleClickOpen}>
          Dialog
        </Button>
      </LegacyGrid>
      <LegacyGrid>
        <Button variant="light" onClick={handleOpenDialogWithHeader}>
          Dialog with DialogHeader
        </Button>
      </LegacyGrid>
      <Dialog
        title={
          <>
            Заголовок
            <Subtitle variant="ui">Подзаголовок</Subtitle>
          </>
        }
        open={dialogOpen}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
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
      <Dialog open={dialogWithHeaderOpen} onClose={handleCloseDialogWithHeader}>
        <DialogHeader title="Заголовок" onClose={handleCloseDialogWithHeader}>
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
          <Button variant="text" onClick={handleCloseDialogWithHeader}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseDialogWithHeader}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </LegacyGrid>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
