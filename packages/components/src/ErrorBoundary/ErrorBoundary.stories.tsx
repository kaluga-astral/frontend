import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import outdatedReleaseIllustration from '../../../ui/illustrations/outdated_release.svg';
import errorIllustration from '../../../ui/illustrations/error.svg';
import { Button } from '../Button';

import { ErrorBoundary } from './ErrorBoundary';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
};

export default meta;

/**
 * Кастомная ошибка подгрузки чанков при релизах
 */
class OutdatedReleaseError extends Error {
  constructor(message: string = '', ...args: ErrorOptions[]) {
    super(message, ...args);
    this.name = 'ChunkLoadError';
  }
}

/**
 * Кнопка для вызова ошибки type = Default
 */
const BuggyButton = () => {
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
};

/**
 * Кнопка для вызова ошибки при релизах type = OutdatedRelease
 */
const OutdatedReleaseButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      throw new OutdatedReleaseError('Ошибка загрузки приложения');
    }
  });

  return <Button onClick={onClick}>Вызову ошибку релиза</Button>;
};

/**
 *  Стандартная обработка всех непредвиденных ошибок исполения кода в приложении
 */
export const Default = () => {
  return (
    <ConfigProvider
      captureException={(error) => alert(error)}
      imagesMap={{
        defaultErrorImgSrc: errorIllustration,
        noDataImgSrc: errorIllustration,
        outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
      }}
      techSup={{ email: 'test@example.com', phone: '79999999999' }}
    >
      <ErrorBoundary>
        <BuggyButton />
      </ErrorBoundary>
    </ConfigProvider>
  );
};

/**
 *  ```OutdatedRelease``` появляется только при устаревание статики после релиза,
 *  позволяет производить сборку в любое время и предостерегает клиента от непредвиденных ошибок во время релиза
 */
export const OutdatedRelease = () => (
  <ConfigProvider
    captureException={(error) => alert(error)}
    imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: errorIllustration,
      outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
    }}
  >
    <ErrorBoundary>
      <OutdatedReleaseButton />
    </ErrorBoundary>
  </ConfigProvider>
);
