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
  const [isActive, handleActive, handleInactive] = useToggle();
  const [loading, setLoading] = React.useState(false);

  const handleConfirm = () => {
    setLoading(true);

    return setTimeout(() => {
      setLoading(false);
      handleInactive();
    }, 1000);
  };

  return (
    <div>
      <Button variant="light" onClick={handleActive}>
        ConfirmDialog
      </Button>
      <ConfirmDialog
        open={isActive}
        title="Подверждение"
        description="Вы подтверждаете дейтвие?"
        onClose={handleInactive}
        actions={{
          confirm: { text: 'Да', onClick: handleConfirm, loading },
          cancel: { text: 'Нет', onClick: handleInactive, variant: 'text' },
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
