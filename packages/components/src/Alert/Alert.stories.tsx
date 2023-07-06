import { Story } from '@storybook/react';
import { Link } from '@mui/material';
import { useState } from 'react';

import { ExampleTemplate } from '../docs';
import { Grid } from '../Grid';
import { Button } from '../Button';

import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const AlertShowcase: Story = () => {
  return <ExampleTemplate />;
};

AlertShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => {
  const [closedList, setClosedList] = useState<string[]>([]);

  const handleClose = (id: string) => () => setClosedList([...closedList, id]);

  const handleReset = () => setClosedList([]);

  return (
    <Grid spacing={4}>
      <Alert
        {...args}
        onClose={handleClose('1')}
        display={!closedList.includes('1')}
        actions={
          <>
            <Link underline="hover" href="https://www.google.com/">
              Кнопка-ссылка
            </Link>
            <Link underline="hover" href="https://www.google.com/">
              Другая кнопка-ссылка
            </Link>
          </>
        }
      >
        Заголовок и действия опциональны, их можно отключить, если требуется.
      </Alert>

      <br />
      <Button onClick={handleReset}>Сбросить</Button>
    </Grid>
  );
};

export const AlertStory = Template.bind({});

AlertStory.storyName = 'Alert';

AlertStory.args = {
  severity: 'info',
  title: 'Заголовок',
  closeText: 'Скрыть',
  square: false,
  elevation: 1,
};

AlertStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
