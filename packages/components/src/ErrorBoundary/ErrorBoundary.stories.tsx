import { Story } from '@storybook/react';
import { useEffect, useState } from 'react';

import errorIllustration from '../../../ui/illustrations/error.svg';
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
    <ConfigProvider
      captureException={(error) => alert(error)}
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: errorIllustration,
      }}
      techSup={{ email: 'test@example.com', phone: '79999999999' }}
    >
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
