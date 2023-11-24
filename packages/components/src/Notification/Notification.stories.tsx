import { type Meta, type StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import { Button } from '../Button';
import { CircularProgress } from '../CircularProgress';
import { Typography } from '../Typography';
import { TextField } from '../TextField';
import { styled } from '../styles';
import { Paper } from '../Paper';

import { notify } from './Notification';
import { NotificationContainer } from './NotificationContainer';
import { NotificationTemplate } from './NotificationTemplate';

/**
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=10626%3A132675&t=0Rur6xF3mW3knhlm-1)
 * ### [Guide]()
 */
const meta: Meta<typeof NotificationTemplate> = {
  title: 'Components/Notification',
  component: NotificationTemplate,
};

export default meta;

type Story = StoryObj<typeof NotificationTemplate>;

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
      containerId: 'example',
    });
  };

  return (
    <ExamplePaper>
      <NotificationContainer
        enableMultiContainer={true}
        containerId={'example'}
      />
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
      containerId: 'types',
    });
  };

  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      filled: false,
      containerId: 'types',
    });
  };

  const handleWarning = () => {
    notify.warning('Внимание', {
      filled: false,
      containerId: 'types',
    });
  };
  const handleError = () => {
    notify.error('Соединение потеряно', {
      filled: false,
      containerId: 'types',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainer
        enableMultiContainer={true}
        containerId={'types'}
      />
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
      containerId: 'autoclose',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainer
        enableMultiContainer={true}
        containerId={'autoclose'}
      />
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
      containerId: 'content',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainer
        enableMultiContainer={true}
        containerId={'content'}
      />
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
      containerId: 'icon',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainer enableMultiContainer={true} containerId={'icon'} />
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
      containerId: 'hide-progress-bar',
    });
  };

  return (
    <ExampleStack>
      <NotificationContainer
        enableMultiContainer={true}
        containerId={'hide-progress-bar'}
      />
      <Stack direction="row" gap={2}>
        <Button onClick={handleErrorWithContentWithoutProgressBar}>
          Hide progress bar
        </Button>
      </Stack>
    </ExampleStack>
  );
};
