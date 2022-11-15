import React from 'react';
import { Story } from '@storybook/react';

import { Button } from '../Button';

import { ConfirmDialog } from './ConfirmDialog';

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
};

const Template: Story = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setLoading(true);

    return setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="light" onClick={handleClickOpen}>
        ConfirmDialog
      </Button>
      <ConfirmDialog
        open={open}
        title="Подверждение"
        description="Вы подтверждаете дейтвие?"
        actions={{
          confirm: { text: 'Да', onClick: handleConfirm, loading },
          cancel: { text: 'Нет', onClick: handleClose, variant: 'text' },
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
