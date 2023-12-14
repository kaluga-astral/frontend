import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

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

/**
 * Когда требуется, чтобы пользователи взаимодействовали с приложением, но без перехода на новую страницу и прерывания рабочего процесса пользователя, нужно использовать Dialog.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=95-159&mode=design&t=5c0oZ9TMtlkNyOeB-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
};

export default meta;

export const Interaction: Story = {
  args: {
    title: 'Заголовок диалога',
    open: false,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Subtitle = styled(Typography)`
  &::before {
    content: '|';

    padding: ${({ theme }) => theme.spacing(0, 4)};

    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Default dialog</Button>
      <Dialog open={isOpen} onClose={handleClose} title="Заголовок">
        <DialogContent>
          <DialogContentText>
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
    </>
  );
};

export const HeaderWithSubtitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>With subtitle</Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        title={
          <>
            Заголовок
            <Subtitle>Подзаголовок</Subtitle>
          </>
        }
      >
        <DialogContent>
          <DialogContentText>
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
    </>
  );
};

/**
 * В хедере диалогового окна могут добавляться дополнительные элементы. Они могут добавляться к заголовку или закрепляться по правому краю.
 * */
export const CustomHeader = () => {
  const [isOpenHeaderLeft, setIsOpenHeaderLeft] = useState(false);
  const [isOpenHeaderRight, setIsOpenHeaderRight] = useState(false);

  const handleOpenHeaderLeft = () => {
    setIsOpenHeaderLeft(true);
  };

  const handleCloseHeaderLeft = () => {
    setIsOpenHeaderLeft(false);
  };

  const handleOpenHeaderRight = () => {
    setIsOpenHeaderRight(true);
  };

  const handleCloseHeaderRight = () => {
    setIsOpenHeaderRight(false);
  };

  return (
    <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={handleOpenHeaderLeft}>
          Custom header dialog left
        </Button>
        <Button onClick={handleOpenHeaderRight}>
          Custom header dialog right
        </Button>
      </Grid>
      <Dialog open={isOpenHeaderLeft} onClose={handleCloseHeaderLeft}>
        <DialogHeader title="Заголовок" onClose={handleCloseHeaderLeft}>
          <Tag variant="light" label="Light Tag" color="primary" />
        </DialogHeader>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleCloseHeaderLeft}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseHeaderLeft}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isOpenHeaderRight} onClose={handleCloseHeaderRight}>
        <DialogHeader
          title="Заголовок"
          onClose={handleCloseHeaderRight}
          justifyContent="flex-end"
        >
          <Tag variant="contained" label="Light Tag" color="primary" />
        </DialogHeader>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleCloseHeaderRight}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseHeaderRight}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const CustomFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Custom footer dialog</Button>
      <Dialog open={isOpen} onClose={handleClose} title="Заголовок">
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Вернуться позже
          </Button>
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
