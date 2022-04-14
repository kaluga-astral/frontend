import React from 'react';
import { Story } from '@storybook/react';

import { Button } from '../index';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';

import { SideDialog } from './SideDialog';

export default {
  title: 'Components/SideDialog',
  component: SideDialog,
};

const Template: Story = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="light" onClick={handleOpen}>
        SideDialog
      </Button>
      <SideDialog title="Заголовок страницы" open={open} onClose={handleClose}>
        <SideDialogContent>
          <SideDialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень выжный смысл
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
            bibendum. Dui accumsan sit amet nulla facilisi morbi tempus.
            Condimentum lacinia quis vel eros donec. Dis parturient montes
            nascetur ridiculus. Purus faucibus ornare suspendisse sed nisi lacus
            sed viverra. Quisque id diam vel quam. Magna sit amet purus gravida
            quis blandit turpis cursus in. Dolor morbi non arcu risus. Sed cras
            ornare arcu dui vivamus arcu felis bibendum ut.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris
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
            bibendum. Dui accumsan sit amet nulla facilisi morbi tempus.
            Condimentum lacinia quis vel eros donec. Dis parturient montes
            nascetur ridiculus. Purus faucibus ornare suspendisse sed nisi lacus
            sed viverra. Quisque id diam vel quam. Magna sit amet purus gravida
            quis blandit turpis cursus in. Dolor morbi non arcu risus. Sed cras
            ornare arcu dui vivamus arcu felis bibendum ut.
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
