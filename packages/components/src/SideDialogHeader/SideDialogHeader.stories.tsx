import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { SettingsOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { Grid } from '../Grid';
import { IconButton } from '../IconButton';
import { Tag } from '../Tag';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';
import { SideDialog } from '../SideDialog';

import { SideDialogHeader } from '.';

/**
 * SideDialogHeader предназначен для размещения дополнительных элементов в хэдере SideDialog
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=657-13634&mode=design&t=LXFGf7NmF8l4oSL1-0)
 * ### [Guide]()
 * */
const meta: Meta<typeof SideDialogHeader> = {
  title: 'Components/SideDialog/SideDialogHeader',
  component: SideDialogHeader,
};

export default meta;

type Story = StoryObj<typeof SideDialogHeader>;

export const Interaction: Story = {
  args: {
    title: 'Заголовок',
    disableSpacing: false,
    justifyContent: 'flex-start',
    onClose: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 * Дополнительные элементы могут добавляться к заголовку или закрепляться по правому краю
 * */
export const Example = () => {
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
