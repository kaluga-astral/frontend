import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Button } from '../Button';

import { notify } from './Notification';
import { NotificationContainer } from './NotificationContainer';
import { NotificationTemplate } from './NotificationTemplate';

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
    notify.info('Внимание!', {
      filled: false,
    });
  };

  const handleFilledInfo = () => {
    notify.info('Внимание!');
  };

  const handledInfoWithContent = () => {
    notify.info('Внимание!', {
      filled: false,
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleSuccess = () => {
    notify.success('Операция успешно завершен', {
      filled: false,
    });
  };

  const handleFilledSuccess = () => {
    notify.success('Операция успешно завершен');
  };

  const handleSuccessWithContent = () => {
    notify.success('Операция успешно завершен', {
      filled: false,
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleWarning = () => {
    notify.warning('Внимание', {
      filled: false,
    });
  };

  const handleFilledWarning = () => {
    notify.warning('Внимание');
  };

  const handleWarningWithContent = () => {
    notify.warning('Внимание', {
      filled: false,
      content: 'Внимание, внимание, все более менее.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleError = () => {
    notify.error('Соединение потеряно', {
      filled: false,
    });
  };

  const handleFilledError = () => {
    notify.error('Соединение потеряно');
  };

  const handleErrorWithContent = () => {
    notify.error('Соединение потеряно', {
      filled: false,
      content: 'У вас куча ошибок.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  return (
    <>
      <NotificationContainer autoClose={2500} />
      <Stack direction="row" gap={2}>
        <Stack direction="column" gap={2}>
          <Stack direction="column">
            <h2>Base notify </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handleInfo}>info</Button>
              <Button onClick={handleSuccess}>success</Button>
              <Button onClick={handleWarning}>warn</Button>
              <Button onClick={handleError}>error</Button>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Filled notify </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handleFilledInfo}>filled info</Button>
              <Button onClick={handleFilledSuccess}>filled success</Button>
              <Button onClick={handleFilledWarning}>filled warn</Button>
              <Button onClick={handleFilledError}>filled error</Button>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Notify with content and actions </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handledInfoWithContent}>
                notify with content and action
              </Button>
              <Button onClick={handleSuccessWithContent}>
                notify with content and action
              </Button>
              <Button onClick={handleWarningWithContent}>
                notify with content and action
              </Button>
              <Button onClick={handleErrorWithContent}>
                notify with content and action
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
