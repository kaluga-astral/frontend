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
      actions: <Button variant="link">Подробнее</Button>,
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
      actions: <Button variant="link">Подробнее</Button>,
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
      actions: <Button variant="link">Подробнее</Button>,
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
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleErrorWithContentWithoutProgressBar = () => {
    notify.error('Соединение потеряно', {
      filled: false,
      content: 'У вас куча ошибок.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      hideProgressBar: true,
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
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <Button onClick={handledInfoWithContent}>
                  info with content and action
                </Button>
                <Button onClick={handleSuccessWithContent}>
                  success with content and action
                </Button>
              </Stack>
              <Stack direction="row" gap={2}>
                <Button onClick={handleWarningWithContent}>
                  warning with content and action
                </Button>
                <Button onClick={handleErrorWithContent}>
                  error with content and action
                </Button>
              </Stack>
              <Button onClick={handleErrorWithContentWithoutProgressBar}>
                error with content and action without progressBar
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
