import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { type ReactNode } from 'react';

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
  it('Props:children с непредвиденной ошибкой: Обрабатывается непредвиденная ошибка', async () => {
    renderWithTheme(
      <TestComponent>
        <BuggyButton />
      </TestComponent>,
    );

    await userEvents.dblClick(screen.getByRole('button'));
    expect(screen.getByText('Произошла непредвиденная ошибка')).toBeVisible();
  });

  it('Props:children с ошибкой загрузки chunk: Обрабатывается ошибка загрузки chunk', async () => {
    renderWithTheme(
      <TestComponent>
        <ChunkLoadErrorButton />
      </TestComponent>,
    );

    await userEvents.click(screen.getByRole('button'));
    expect(screen.getByText('Обновление в сервисе')).toBeVisible();
  });

  it('Props:children с ошибкой загрузки es-modules: Обрабатывается ошибка загрузки es modules', async () => {
    renderWithTheme(
      <TestComponent>
        <FailedFetchModuleButton />
      </TestComponent>,
    );

    await userEvents.click(screen.getByRole('button'));
    expect(screen.getByText('Обновление в сервисе')).toBeVisible();
  });
});
