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
import { DescriptionList, type DescriptionListItem } from '../DescriptionList';

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

const FAKE_ITEMS: DescriptionListItem[] = [
  {
    name: 'Дата поступления',
    value: '12.06.2024 в 11:11',
  },
  {
    name: 'Тип заявки',
    value: 'Создание',
  },
  {
    name: 'ID учетной записи',
    value: '4d1f0594-bc22-4660-8e7d-83a024126ef3',
  },
  {
    name: 'ID док-оборота',
    value: '222a1343-rf12-6660-1e3q-88a911143yr1',
  },
  {
    name: 'ИНН',
    value: '77724528768',
  },
  {
    name: 'КПП',
    value: '772401001',
  },
  {
    name: 'Конфигурация',
    value: 'Значение показателя',
  },
  {
    name: 'Удостоверенный центр',
    value: 'УЦ «Калуга Астрал»',
  },
];

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
  const [openXs, setOpenXs] = useState(false);
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);
  const [openXl, setOpenXl] = useState(false);

  const handleCloseXs = () => {
    setOpenXs(false);
  };
  const handleCloseSm = () => {
    setOpenSm(false);
  };
  const handleCloseMd = () => {
    setOpenMd(false);
  };
  const handleCloseLg = () => {
    setOpenLg(false);
  };

  const handleCloseXl = () => {
    setOpenXl(false);
  };

  return (
    <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={() => setOpenXs((prevState) => !prevState)}>
          Dialog xs size
        </Button>
        <Button onClick={() => setOpenSm((prevState) => !prevState)}>
          Dialog sm size
        </Button>
        <Button onClick={() => setOpenMd((prevState) => !prevState)}>
          Dialog md size
        </Button>
        <Button onClick={() => setOpenLg((prevState) => !prevState)}>
          Dialog lg size
        </Button>
        <Button onClick={() => setOpenXl((prevState) => !prevState)}>
          Dialog xl size
        </Button>
      </Grid>
      <Dialog open={openXs} onClose={handleCloseXs} title="Заявка" size="xs">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={handleCloseXs} variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseXs} variant="light" color="success">
            Принять
          </Button>
        </DialogActionComponent>
      </Dialog>
      <Dialog open={openSm} onClose={handleCloseSm} title="Заявка" size="sm">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={handleCloseSm} variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseSm} variant="light" color="success">
            Принять
          </Button>
        </DialogActionComponent>
      </Dialog>
      <Dialog open={openMd} onClose={handleCloseMd} title="Заявка" size="md">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={handleCloseMd} variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseMd} variant="light" color="success">
            Принять
          </Button>
        </DialogActionComponent>
      </Dialog>
      <Dialog open={openLg} onClose={handleCloseLg} title="Заявка" size="lg">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={handleCloseLg} variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseLg} variant="light" color="success">
            Принять
          </Button>
        </DialogActionComponent>
      </Dialog>
      <Dialog open={openXl} onClose={handleCloseXl} title="Заявка" size="xl">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActionComponent>
          <Button onClick={handleCloseXl} variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseXl} variant="light" color="success">
            Принять
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>
  );
};
