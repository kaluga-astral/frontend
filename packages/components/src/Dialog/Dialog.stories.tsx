import { useState } from 'react';
import { type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { DialogActions } from '../DialogActions';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { Grid } from '../Grid';
import { Tag } from '../Tag';
import { Typography } from '../Typography';
import { DialogHeader } from '../DialogHeader';
import { styled } from '../styles';

import { Dialog } from './Dialog';

type Story = StoryObj<typeof Dialog>;

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Subtitle = styled(Typography)`
  &::before {
    content: '|';

    padding: ${({ theme }) => theme.spacing(0, 4)};

    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

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
    <Grid container spacing={2}>
      <Grid>
        <Button variant="light" onClick={handleClickOpen}>
          Dialog
        </Button>
      </Grid>
      <Grid>
        <Button variant="light" onClick={handleOpenDialogWithHeader}>
          Dialog with DialogHeader
        </Button>
      </Grid>
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
    </Grid>
  );
};

export const Default = Template.bind({});
