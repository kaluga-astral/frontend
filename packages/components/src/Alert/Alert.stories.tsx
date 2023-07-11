import { Story } from '@storybook/react';
import { Link } from '@mui/material';
import { useState } from 'react';

import { LegacyGrid } from '../LegacyGrid';
import { Button } from '../Button';

import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template: Story = () => {
  const [closedList, setClosedList] = useState<string[]>([]);

  const handleClose = (id: string) => () => setClosedList([...closedList, id]);

  const handleReset = () => setClosedList([]);

  return (
    <LegacyGrid spacing={4}>
      <Alert
        severity="error"
        title="Заголовок"
        onClose={handleClose('1')}
        display={!closedList.includes('1')}
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>
      <br />
      <Alert
        severity="success"
        title="Заголовок"
        onClose={handleClose('2')}
        display={!closedList.includes('2')}
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>
      <br />
      <Alert
        severity="warning"
        title="Заголовок"
        onClose={handleClose('3')}
        display={!closedList.includes('3')}
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>
      <br />
      <Alert
        severity="info"
        title="Заголовок"
        onClose={handleClose('4')}
        display={!closedList.includes('4')}
        actions={
          <>
            <Link underline="hover" href="https://www.google.com/">
              Кнопка ссылка
            </Link>
            <Link underline="hover" href="https://www.google.com/">
              Другая кнопка ссылка
            </Link>
          </>
        }
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>
      <br />
      <Button onClick={handleReset}>Сбросить</Button>
    </LegacyGrid>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { expanded: true },
};
