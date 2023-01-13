import { Story } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { ConfigProvider } from '../ConfigProvider';

import { ErrorBoundary } from './ErrorBoundary';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
};

function BuggyButton() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 2) {
      throw new Error('Кнопка сломалась на 2 клике');
    }
  });

  return <Button onClick={onClick}>Сломаюсь на 2 клике</Button>;
}

const Template: Story = () => {
  return (
    <ConfigProvider captureException={(error) => alert(error)}>
      <ErrorBoundary>
        <BuggyButton />
      </ErrorBoundary>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
