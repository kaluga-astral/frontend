import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { DialogActions } from '../DialogActions';
import { DialogContentText } from '../DialogContentText';

import { DialogContent } from './DialogContent';

type Story = StoryObj<typeof DialogContent>;

/**
 * Для размещения контента внутри Dialog используется DialogContent
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=95-159&mode=design&t=5c0oZ9TMtlkNyOeB-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DialogContent> = {
  title: 'Components/Dialog/DialogContent',
  component: DialogContent,
};

export default meta;

export const Interaction: Story = {
  args: {
    children: 'DialogContent',
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
