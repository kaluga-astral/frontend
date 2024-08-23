import { type Meta } from '@storybook/react';

import { ConfigProvider } from '../ConfigProvider';
import outdatedReleaseIllustration from '../../../ui/illustrations/outdated-release.svg';
import errorIllustration from '../../../ui/illustrations/error.svg';

import { BuggyButton, ChunkLoadErrorButton } from './ErrorBoundary.stubs';
import { ErrorBoundary } from './ErrorBoundary';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
};

export default meta;

/**
 *  Стандартная обработка всех непредвиденных ошибок исполнения кода в приложении
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
      <ChunkLoadErrorButton />
    </ErrorBoundary>
  </ConfigProvider>
);
