import { useMemo, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import { Button } from '../Button';
import { CircularProgress } from '../CircularProgress';
import { Typography } from '../Typography';
import { TextField } from '../TextField';
import { styled } from '../styles';
import { Paper } from '../Paper';

import { NOTIFY_STATIC_CONTAINER_ID } from './constants';
import { notify } from './NotificationNext';
import { NotificationStackContainerNext } from './NotificationStackContainerNext';
import { NotificationContainerNext } from './NotificationContainerNext';
import { NotificationTemplateNext } from './NotificationTemplateNext';

/**
 * ### Компонент для организации уведомлений
 * В отличии от компонента Notification основан на react-toastify 10 версии. Предназначен для использования на проектах с версией React >= 18
 * Импорт компонента осуществляется из @astral/components/next или @astral/ui/next
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=10626%3A132675&t=0Rur6xF3mW3knhlm-1)
 * ### [Guide]()
 */
const meta: Meta<typeof NotificationTemplateNext> = {
  title: 'Components/NotificationNext',
  component: NotificationTemplateNext,
};

export default meta;

type Story = StoryObj<typeof NotificationTemplateNext>;

export const Interaction: Story = {
  args: {
    filled: false,
    content: 'Поле сохранено',
    showCloseButton: true,
    icon: <CircularProgress color="primary" size="medium" />,
    variant: 'success',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const ExamplePaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)};
`;

const ExampleStack = styled(Stack)`
  padding: ${({ theme }) => theme.spacing(24)};
`;

export const Example = () => {
  const handleSuccessExample = () => {
    notify.success('Успешно', {
      filled: false,
      content: 'Поле сохранено',
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'example',
    });
  };

  return (
    <ExamplePaper>
      <NotificationContainerNext containerId="example" />

      <Stack gap={15}>
        <Stack flexDirection="column" gap={2}>
          <Typography>Введите название поля</Typography>
          <TextField />
          <Button onClick={handleSuccessExample}>Сохранить</Button>
        </Stack>
      </Stack>
    </ExamplePaper>
  );
};

export const Types = () => {
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      filled: false,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types',
    });
  };

  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      filled: false,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types',
    });
  };

  const handleWarning = () => {
    notify.warning('Внимание', {
      filled: false,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types',
    });
  };

  const handleError = () => {
    notify.error('Соединение потеряно', {
      filled: false,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types',
    });
  };

  const handleProgress = () => {
    notify.progress('Подписание документов', {
      filled: false,
      containerId: 'types',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="types" />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>info</Button>

        <Button onClick={handleSuccess} color="success">
          success
        </Button>

        <Button onClick={handleWarning} color="warning">
          warning
        </Button>

        <Button onClick={handleError} color="error">
          error
        </Button>

        <Button onClick={handleProgress}>progress</Button>
      </Stack>
    </ExampleStack>
  );
};

export const AutoClose = () => {
  const handleWithoutCloseButton = () => {
    notify.success('Идёт загрузка...', {
      filled: false,
      showCloseButton: false,
      autoClose: 10000,
      icon: <CircularProgress color="primary" size="medium" />,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'autoclose',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="autoclose" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleWithoutCloseButton}>Autoclose in 10 sec</Button>
      </Stack>
    </ExampleStack>
  );
};

export const Content = () => {
  const handleSuccessWithContent = () => {
    notify.success('Операция успешно завершена', {
      filled: false,
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'content',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="content" />
      <Stack direction="row" gap={2}>
        <Button onClick={handleSuccessWithContent}>With content</Button>
      </Stack>
    </ExampleStack>
  );
};

export const Icon = () => {
  const handleSuccessWithIcon = () => {
    notify.success('Операция успешно завершена', {
      filled: false,
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      icon: <CircularProgress color="primary" size="medium" />,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'icon',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="icon" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleSuccessWithIcon}>With icon</Button>
      </Stack>
    </ExampleStack>
  );
};

export const HideProgressBar = () => {
  const handleErrorWithContentWithoutProgressBar = () => {
    notify.error('Ошибка', {
      filled: false,
      content: 'Соединение потеряно',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      hideProgressBar: true,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'hide-progress-bar',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="hide-progress-bar" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleErrorWithContentWithoutProgressBar}>
          Hide progress bar
        </Button>
      </Stack>
    </ExampleStack>
  );
};

/**
 * Предназначен для отображения состояния асинхронной операции с массивом элементов, например массовая отправка или подписание документов
 * `notify.initProgress` возвращает объект с методами: `start`, `update`, `success`, `error` и `stop`
 */
export const ProgressNotify = () => {
  const [isStartedSign, setStartedSign] = useState(false);
  const [isStartedSend, setStartedSend] = useState(false);

  const progressSignNotify = useMemo(
    () =>
      notify.initProgress({
        // containerId необходимо для storybook, так как на одном экране несколько контейнеров
        containerId: 'progress-notify',
      }),
    [],
  );

  const progressSendNotify = useMemo(
    () =>
      notify.initProgress({
        // containerId необходимо для storybook, так как на одном экране несколько контейнеров
        containerId: 'progress-notify',
      }),
    [],
  );

  const handleProgressSignNotify = () => {
    progressSignNotify.start('Подписание документов 1 из 3', {
      content: 'Подписывается документ №001',
    });

    setStartedSign(true);
  };

  const handleUpdatesSignNotify = () => {
    progressSignNotify.update('Подписание документов 2 из 3', {
      content: 'Подписывается документ №002',
    });
  };

  const handleSuccessSignNotify = () => {
    progressSignNotify.success('Документы подписаны', {
      content: '3 документа успешно подписано',
    });
  };

  const handleErrorsSignNotify = () => {
    progressSignNotify.error('Ошибка подписания документов', {
      content: 'Не удалось подписать документы',
      actions: <Button variant="link">Подробнее</Button>,
    });
  };

  const handleClosesSignNotify = () => {
    progressSignNotify.stop();
    setStartedSign(false);
  };

  const handleProgressNotifySendNotify = () => {
    progressSendNotify.start('Отправка документов 1 из 3', {
      content: 'Отправляется документ №111',
    });

    setStartedSend(true);
  };

  const handleUpdateSendNotify = () => {
    progressSendNotify.update('Отправка документов 2 из 3', {
      content: 'Отправляется документ №112',
    });
  };

  const handleCloseSendNotify = () => {
    progressSendNotify.stop();
    setStartedSend(false);
  };

  return (
    <ExampleStack>
      <NotificationContainerNext containerId="progress-notify" />

      <Stack direction="row" gap={2}>
        <Stack gap={2}>
          <Button disabled={isStartedSign} onClick={handleProgressSignNotify}>
            {!isStartedSign ? 'Start sign notify' : 'Started...'}
          </Button>

          <Button disabled={!isStartedSign} onClick={handleUpdatesSignNotify}>
            Update notify
          </Button>

          <Button
            disabled={!isStartedSign}
            color="success"
            onClick={handleSuccessSignNotify}
          >
            Success notify
          </Button>

          <Button
            disabled={!isStartedSign}
            color="error"
            onClick={handleErrorsSignNotify}
          >
            Error notify
          </Button>

          <Button
            disabled={!isStartedSign}
            variant="light"
            onClick={handleClosesSignNotify}
          >
            Сбросить
          </Button>
        </Stack>

        <Stack gap={2}>
          <Button
            disabled={isStartedSend}
            onClick={handleProgressNotifySendNotify}
          >
            {!isStartedSend ? 'Start send notify' : 'Started...'}
          </Button>

          <Button disabled={!isStartedSend} onClick={handleUpdateSendNotify}>
            Update notify
          </Button>

          <Button
            disabled={!isStartedSend}
            variant="light"
            onClick={handleCloseSendNotify}
          >
            Сбросить
          </Button>
        </Stack>
      </Stack>
    </ExampleStack>
  );
};

export const WithStack = () => {
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      filled: false,
    });
  };

  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      filled: false,
    });
  };

  const handleWarning = () => {
    notify.warning('Внимание', {
      filled: false,
    });
  };

  const handleError = () => {
    notify.error('Соединение потеряно', {
      filled: false,
    });
  };

  const handleProgress = () => {
    const progressNotify = notify.initProgress({
      containerId: NOTIFY_STATIC_CONTAINER_ID,
    });

    progressNotify.start('Загрузка документов...');

    setTimeout(
      () => progressNotify.success('Документы успешно загружены'),
      3000,
    );
  };

  const handleSuccessWithContent = () => {
    notify.success('Операция успешно завершена и заголовок в две строки', {
      filled: false,
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  return (
    <ExampleStack>
      <NotificationStackContainerNext />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>Notify info</Button>

        <Button onClick={handleWarning} color="warning">
          Notify warning
        </Button>

        <Button onClick={handleError} color="error">
          Notify error
        </Button>

        <Button onClick={handleSuccess} color="success">
          Notify success
        </Button>

        <Button onClick={handleSuccessWithContent} color="success">
          Notify success with content
        </Button>

        <Button onClick={handleProgress} color="primary">
          Notify progress
        </Button>
      </Stack>
    </ExampleStack>
  );
};

export const Static = () => {
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      filled: false,
      isStatic: true,
    });
  };

  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      filled: false,
      isStatic: true,
    });
  };

  const handleWarning = () => {
    notify.warning('Внимание', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      filled: false,
      isStatic: true,
    });
  };

  const handleError = () => {
    notify.error('Соединение потеряно', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      filled: false,
      isStatic: true,
    });
  };

  return (
    <ExampleStack>
      <NotificationStackContainerNext
        containerId="static"
        staticContainerId="static-static"
      />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>Static notify info</Button>

        <Button onClick={handleWarning} color="warning">
          Static notify warning
        </Button>

        <Button onClick={handleError} color="error">
          Static notify error
        </Button>

        <Button onClick={handleSuccess} color="success">
          Static notify success
        </Button>
      </Stack>
    </ExampleStack>
  );
};
