import { Suspense, lazy } from 'react';

import { ContentState, Route, Routes } from '@example/shared';
import { APP_ROUTES } from '@example/shared';

const DocumentsIncomingListPage = lazy(() => import('./incoming/incomingList'));
const DocumentsIncomingCardPage = lazy(() => import('./incoming/incomingCard'));
const DocumentsSentListPage = lazy(() => import('./sent/sentList'));
const DocumentsSentCardPage = lazy(() => import('./sent/sentCard'));
const DocumentsArchivedListPage = lazy(() => import('./archived/archivedList'));
const DocumentsArchivedCardPage = lazy(() => import('./archived/archivedCard'));

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          path={APP_ROUTES.documents.incomingList.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsIncomingListPage />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.documents.incomingCard.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsIncomingCardPage />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.documents.sentList.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsSentListPage />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.documents.sentCard.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsSentCardPage />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.documents.archivedList.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsArchivedListPage />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.documents.archivedCard.route}
          element={
            <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
              <DocumentsArchivedCardPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
