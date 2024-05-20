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
