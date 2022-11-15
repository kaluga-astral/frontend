import React from 'react';
import { Story } from '@storybook/react';

import { Button } from '../Button';
import { useToggle } from '../hooks';

import { ConfirmDialog } from './ConfirmDialog';

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
};

const Template: Story = () => {
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
      <Button variant="light" onClick={handleOpen}>
        ConfirmDialog
      </Button>
      <ConfirmDialog
        open={isActive}
        title="Подверждение"
        description="Вы подтверждаете дейтвие?"
        onClose={handleClose}
        actions={{
          confirm: { text: 'Да', onClick: handleConfirm, loading },
          cancel: { text: 'Нет', variant: 'text' },
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
