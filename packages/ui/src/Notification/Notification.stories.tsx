import { Story } from '@storybook/react';

import { Button } from '../Button';

import { NotificationContainer } from './components/NotificationContainer';
import { NotificationTemplate } from './components/NotificationTemplate';
import { notify } from './Notification';

export default {
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'Element', required: false },
      description: 'Иконка для NotificationTemplate',
      control: {
        type: null,
      },
    },
  },
  title: 'Components/Notification',
  component: NotificationTemplate,
};

const Template: Story = () => {
  const handleInfo = () => {
    notify.info({
      filled: true,
      title: 'Внимание!!!!!!!!',
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleSuccess = () => {
    notify.success({
      filled: true,
      title: 'Операция успешно завершен',
    });
  };

  const handleWarning = () => {
    notify.warning({
      filled: false,
      title: 'Внимание',
    });
  };

  const handleError = () => {
    notify.error({
      filled: false,
      title: 'Соединение потеряно',
    });
  };

  return (
    <>
      <NotificationContainer autoClose={2500} />
      <Button onClick={handleInfo}>info</Button>
      <Button onClick={handleSuccess}>success</Button>
      <Button onClick={handleWarning}>warn</Button>
      <Button onClick={handleError}>error</Button>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
