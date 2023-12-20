import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { SideDialog } from '../SideDialog';
import { SideDialogContent } from '../SideDialogContent';
import { SideDialogContentText } from '../SideDialogContentText';
import { Grid } from '../Grid';

import { SideDialogActions } from './SideDialogActions';

type Story = StoryObj<typeof SideDialogActions>;

/**
 * SideDialogActions используется для передачи в футер SideDialog компонентов для управления окном.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=657-13634&mode=design&t=LXFGf7NmF8l4oSL1-0)
 * ### [Guide]()
 */
const meta: Meta<typeof SideDialogActions> = {
  title: 'Components/SideDialog/SideDialogActions',
  component: SideDialogActions,
};

export default meta;

export const Interaction: Story = {
  args: {
    children: <Button>Готово</Button>,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 * В футере  могут добавляться дополнительные элементы.
 * */
export const Example = () => {
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
