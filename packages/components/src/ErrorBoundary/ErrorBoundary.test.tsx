import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { ReactNode } from 'react';

import { ConfigProvider } from '../ConfigProvider';
import errorIllustration from '../../../ui/illustrations/error.svg';
import outdatedReleaseIllustration from '../../../ui/illustrations/outdated_release.svg';

import {
  BuggyButton,
  ChunkLoadErrorButton,
  FailedFetchModuleButton,
} from './ErrorBoundary.stubs';
import { ErrorBoundary } from './ErrorBoundary';

const TestComponent = ({ children }: { children: ReactNode }) => (
  <ConfigProvider
    captureException={(error) => alert(error)}
    imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: errorIllustration,
      outdatedReleaseErrorImgSrc: outdatedReleaseIllustration,
    }}
    techSup={{ email: 'test@example.com', phone: '79999999999' }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </ConfigProvider>
);

describe('ErrorBoundary', () => {
  it('Props:children with error type=default: Отображается placeholder с непредвиденной ошибкой', async () => {
    renderWithTheme(
      <TestComponent>
        <BuggyButton />
      </TestComponent>,
    );

    await userEvents.dblClick(screen.getByRole('button'));
    expect(screen.getByText('Произошла непредвиденная ошибка')).toBeVisible();
  });

  it.each<[string, ReactNode]>([
    ['ChunkLoadError', <ChunkLoadErrorButton />],
    [
      'Failed to fetch dynamically imported module',
      <FailedFetchModuleButton />,
    ],
  ])(
    'Props:children with error %s & type=outdatedRelease: Отображается placeholder с ошибкой при загрузке чанков',
    async (_, children) => {
      renderWithTheme(<TestComponent>{children}</TestComponent>);
      await userEvents.click(screen.getByRole('button'));
      expect(screen.getByText('Обновление в сервисе')).toBeVisible();
    },
  );
});
