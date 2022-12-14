import { forwardRef, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import {
  DashboardLayout,
  DocumentsOutlineMd,
  RouterLink,
  matchPath,
  useLocation,
} from '@example/shared';
import { APP_ROUTES } from '@example/shared';

type IsActiveRoute = { path: string; end?: boolean };

type IsActiveProps = IsActiveRoute & {
  paths?: IsActiveRoute[];
};

export const Sidebar = observer(() => {
  const location = useLocation();

  const isActiveRoute = useCallback(
    ({ path, end = true, paths }: IsActiveProps) => {
      if (paths?.length) {
        return paths.some(({ path: pathEl, end: endEl = true }) =>
          matchPath({ path: pathEl, end: endEl }, location.pathname),
        );
      }

      return Boolean(matchPath({ path, end }, location.pathname));
    },
    [location.pathname],
  );

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            '/',
            {
              icon: <DocumentsOutlineMd />,
              text: 'Мои документы',
              items: [
                [
                  APP_ROUTES.documents.incomingList.route,
                  {
                    text: 'Входящие',
                    active: isActiveRoute({
                      path: APP_ROUTES.documents.incomingList.route,
                      paths: [
                        {
                          path: APP_ROUTES.documents.incomingList.route,
                          end: true,
                        },
                        {
                          path: APP_ROUTES.documents.incomingList
                            .secondaryRoute,
                          end: false,
                        },
                      ],
                    }),
                    component: forwardRef((props, ref) => (
                      <RouterLink
                        ref={ref}
                        to={APP_ROUTES.documents.incomingList.route}
                        {...props}
                      />
                    )),
                  },
                ],
                [
                  APP_ROUTES.documents.sentList.route,
                  {
                    text: 'Отправленные',
                    active: isActiveRoute({
                      path: APP_ROUTES.documents.sentList.route,
                      end: false,
                    }),
                    component: forwardRef((props, ref) => (
                      <RouterLink
                        ref={ref}
                        to={APP_ROUTES.documents.sentList.route}
                        {...props}
                      />
                    )),
                  },
                ],
                [
                  APP_ROUTES.documents.archivedList.route,
                  {
                    text: 'Архив',
                    active: isActiveRoute({
                      path: APP_ROUTES.documents.archivedList.route,
                      end: false,
                    }),
                    component: forwardRef((props, ref) => (
                      <RouterLink
                        ref={ref}
                        to={APP_ROUTES.documents.archivedList.route}
                        {...props}
                      />
                    )),
                  },
                ],
              ],
            },
          ],
        ],
      }}
    />
  );
});
