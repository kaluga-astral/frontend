import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { SideDialog } from '../SideDialog';
import { SideDialogActions } from '../SideDialogActions';
import { SideDialogContentText } from '../SideDialogContentText';

import { SideDialogContent } from './SideDialogContent';

type Story = StoryObj<typeof SideDialogContent>;

/**
 * Для размещения контента внутри SideDialog используется SideDialogContent
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=657-13634&mode=design&t=LXFGf7NmF8l4oSL1-0)
 * ### [Guide]()
 */
const meta: Meta<typeof SideDialogContent> = {
  title: 'Components/Feedback/SideDialog/SideDialogContent',
  component: SideDialogContent,
};

export default meta;

export const Interaction: Story = {
  args: {
    children: 'SideDialogContent',
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
      <Button onClick={handleClickOpen}>SideDialog</Button>
      <SideDialog open={isOpen} onClose={handleClose} title="Заголовок">
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>
  );
};
