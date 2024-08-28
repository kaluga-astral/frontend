import React, { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { SettingsOutlineMd } from '@astral/icons';

import { Alert } from '../Alert';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Grid } from '../Grid';
import { IconButton } from '../IconButton';
import { Tag } from '../Tag';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';
import { SideDialogHeader } from '../SideDialogHeader';
import { Typography } from '../Typography';
import { DescriptionList, type DescriptionListItem } from '../DescriptionList';

import { SideDialog } from './SideDialog';

/**
 * Может содержать:
 * - [SideDialogHeader](/story/components-sidedialog-sidedialogheader--docs)
 * - [SideDialogActions](/story/components-sidedialog-sidedialogactions--docs)
 * - [SideDialogContent](/story/components-sidedialog-sidedialogcontent--docs)
 * - [SideDialogContentText](/story/components-sidedialog-sidedialogcontenttext--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=657-13634&mode=design&t=LXFGf7NmF8l4oSL1-0)
 * ### [Guide]()
 * */
const meta: Meta<typeof SideDialog> = {
  title: 'Components/SideDialog',
  component: SideDialog,
};

export default meta;

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
      <Button onClick={handleOpen}>SideDialog</Button>
      <SideDialog title="Заголовок" open={open} onClose={handleClose}>
        <SideDialogContent>
          <Alert severity="warning">
            Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
            Quisque id diam vel quam.
          </Alert>
          <br />
          <SideDialogContentText id="alert-dialog-description">
            {/* cSpell:disable */}
            Заглушка примера текста страницы, который несет очень важный смысл
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
            {/* cSpell:enable */}
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

/**
 * [SideDialogHeader](/story/components-sidedialog-sidedialogheader--docs)
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
        <Button onClick={handleOpenHeaderLeft}>SideDialog header left</Button>
        <Button onClick={handleOpenHeaderRight}>SideDialog header right</Button>
      </Grid>
      <SideDialog open={isOpenHeaderRight} onClose={handleCloseHeaderRight}>
        <SideDialogHeader
          title="Заголовок"
          onClose={handleCloseHeaderRight}
          justifyContent="flex-start"
        >
          <Tag variant="light" label="Информация" color="primary" />
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
          <Button variant="text" onClick={handleCloseHeaderRight}>
            Отмена
          </Button>
          <Button onClick={handleCloseHeaderRight}>Готово</Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog open={isOpenHeaderLeft} onClose={handleCloseHeaderLeft}>
        <SideDialogHeader
          title="Заголовок"
          onClose={handleCloseHeaderLeft}
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
          <Button variant="text" onClick={handleCloseHeaderLeft}>
            Отмена
          </Button>
          <Button onClick={handleCloseHeaderLeft}>Готово</Button>
        </SideDialogActions>
      </SideDialog>
    </>
  );
};

/**
 * [SideDialogActions](/story/components-sidedialog-sidedialogactions--docs)
 * */
export const CustomFooter = () => {
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
        <Button onClick={handleOpenDefault}>SideDialog actions</Button>
        <Button onClick={handleOpenMoreActions}>SideDialog more actions</Button>
      </Grid>
      <SideDialog
        open={isOpenDefault}
        onClose={handleCloseDefault}
        title="Заголовок"
      >
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleCloseDefault}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseDefault}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog
        open={isOpenMoreActions}
        onClose={handleCloseMoreActions}
        title="Заголовок"
      >
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleCloseMoreActions}>
            Вернуться позже
          </Button>
          <Button variant="text" onClick={handleCloseMoreActions}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseMoreActions}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>
  );
};

/**
 * prop `size` определяет размер SideDialog, по дефолту `sm`
 * */
export const Sizes = () => {
  const [openXs, setOpenXs] = useState(false);
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);

  const items: DescriptionListItem[] = [
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
      name: 'Полное наименование',
      value: 'ООО «АкцептЗайчатинаСТОНал»',
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

  const partnerItems: DescriptionListItem[] = [
    {
      name: 'Офис',
      value: 'АО «Калуга Астрал» ОПС ЭДО',
    },
    {
      name: 'Центр продаж',
      value: 'АО «Калуга Астрал»',
    },
    {
      name: 'ID партнера',
      value: '4d1f0594-bc22-4660-8e7d-83a024126ef3',
    },
  ];
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

  return (
    <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={() => setOpenXs((prevState) => !prevState)}>
          SideDialog xs size
        </Button>
        <Button onClick={() => setOpenSm((prevState) => !prevState)}>
          SideDialog sm size
        </Button>
        <Button onClick={() => setOpenMd((prevState) => !prevState)}>
          SideDialog md size
        </Button>
        <Button onClick={() => setOpenLg((prevState) => !prevState)}>
          SideDialog lg size
        </Button>
      </Grid>
      <SideDialog
        title="Заявка"
        open={openXs}
        onClose={handleCloseXs}
        size="xs"
      >
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={items} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={partnerItems} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light">
            Абонент Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog
        title="Заголовок"
        open={openSm}
        onClose={handleCloseSm}
        size="sm"
      >
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={items} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={partnerItems} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light">
            Абонент Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog
        title="Заголовок"
        open={openMd}
        onClose={handleCloseMd}
        size="md"
      >
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={items} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={partnerItems} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light">
            Абонент Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog
        title="Заголовок"
        open={openLg}
        onClose={handleCloseLg}
        size="lg"
      >
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={items} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={partnerItems} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light">
            Абонент Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>
  );
};
