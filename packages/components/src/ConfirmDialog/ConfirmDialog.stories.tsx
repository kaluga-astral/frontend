import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { useToggle } from '../hooks';

import { ConfirmDialog } from './ConfirmDialog';

/**
 * Необходим для подтверждения действия пользователем.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=11777-162376&mode=design&t=OGj43q0vYqUBqa7W-0)
 * ### [Guide]()
 */
const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
};

export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

export const Interaction: Story = {
  args: {
    open: true,
    title: 'Подверждение',
    onClose: () => {},
    actions: {
      confirm: {
        text: 'Да',
      },
    },
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [isActive, handleOpen, handleClose] = useToggle();
  const [loading, setLoading] = React.useState(false);

  const handleConfirm = () => {
    setLoading(true);

    return setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 1000);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        ConfirmDialog
      </Button>
      <ConfirmDialog
        open={isActive}
        title="Подверждение"
        description="Вы подтверждаете действие?"
        onClose={handleClose}
        actions={{
          confirm: { text: 'Да', onClick: handleConfirm, loading },
          cancel: { text: 'Нет' },
        }}
      />
    </div>
  );
};
