import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';

import {
  BrowserRouter,
  NotificationContainer,
  ThemeProvider,
  apiHttpClient,
  configService,
  queryClient,
  theme,
} from '@example/shared';
import { MainLayout } from '@example/modules/LayoutModule';
import { authStore } from '@example/modules/AuthModule';

import { MainRouter } from './Router';

configService.init({
  apiUrl: process.env.API_URL as string,
  identityUrl: process.env.IDENTITY_URL as string,
});

export const App = observer(() => {
  const [store] = useState(() => authStore);

  useEffect(() => {
    store.addProtectedHttpClients([apiHttpClient]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NotificationContainer />
          <ReactQueryDevtools initialIsOpen />
          <MainLayout>
            <MainRouter />
          </MainLayout>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
});
