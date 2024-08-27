import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { DialogActions as DialogActionComponent } from '../DialogActions';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { DialogHeader } from '../DialogHeader';
import { Grid } from '../Grid';
import { Tag } from '../Tag';
import { Typography } from '../Typography';

import { Dialog } from './Dialog';

type Story = StoryObj<typeof Dialog>;

/**
 * Когда требуется, чтобы пользователи взаимодействовали с приложением, но без перехода на новую страницу и прерывания рабочего процесса пользователя, нужно использовать Dialog.
 * Может содержать:
 *  - [DialogHeader](/story/components-dialog-dialogheader--docs)
 *  - [DialogActions](/story/components-dialog-dialogactions--docs)
 *  - [DialogContent](/story/components-dialog-dialogcontent--docs)
 *  - [DialogContentText](/story/components-dialog-dialogcontenttext--docs)
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
        <DialogActionComponent>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};

export const CustomTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Custom title</Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        title={
          <>
            Заголовок
            <Typography color="grey" colorIntensity="500">
              | Подзаголовок
            </Typography>
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
        <DialogActionComponent>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};

/**
 * [DialogHeader](/story/components-dialog-dialogheader--docs)
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
        <Button onClick={handleOpenHeaderLeft}>Dialog header left</Button>
        <Button onClick={handleOpenHeaderRight}>Dialog header left</Button>
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
        <DialogActionComponent>
          <Button variant="text" onClick={handleCloseHeaderLeft}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseHeaderLeft}>
            Готово
          </Button>
        </DialogActionComponent>
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
        <DialogActionComponent>
          <Button variant="text" onClick={handleCloseHeaderRight}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseHeaderRight}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};

/**
 * [DialogActions](/story/components-dialog-dialogactions--docs)
 * */
export const DialogActions = () => {
  const [isOpenDefault, setIsOpenDefault] = useState(false);
  const [isOpenMoreActions, setIsOpenMoreActions] = useState(false);

  const handleOpenDefault = () => {
    setIsOpenDefault(true);
  };

  const handleCloseDefault = () => {
    setIsOpenDefault(false);
  };

  const handleOpenMoreActions = () => {
    setIsOpenMoreActions(true);
  };

  const handleCloseMoreActions = () => {
    setIsOpenMoreActions(false);
  };

  return (
    <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={handleOpenDefault}>Dialog actions</Button>
        <Button onClick={handleOpenMoreActions}>Dialog more actions</Button>
      </Grid>
      <Dialog
        open={isOpenDefault}
        onClose={handleCloseDefault}
        title="Заголовок"
      >
        <DialogContent>
          <DialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActionComponent>
          <Button variant="text" onClick={handleCloseDefault}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseDefault}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
      <Dialog
        open={isOpenMoreActions}
        onClose={handleCloseMoreActions}
        title="Заголовок"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActionComponent>
          <Button variant="text" onClick={handleCloseMoreActions}>
            Вернуться позже
          </Button>
          <Button variant="text" onClick={handleCloseMoreActions}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseMoreActions}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};

export const Size = () => {
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
      <Dialog open={isOpen} onClose={handleClose} title="Заголовок" size="xl">
        <DialogContent>
          <DialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActionComponent>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Готово
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};
