import { Story } from '@storybook/react';
import { useEffect, useState } from 'react';

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
      throw new Error('I crashed!');
    }
  });

  return <button onClick={onClick}>Click Me</button>;
}

const Template: Story = () => {
  return (
    <ConfigProvider captureException={() => alert('my custom exception')}>
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
