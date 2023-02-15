export const APP_ROUTES = {
  documents: {
    incomingList: {
      route: '/',
      secondaryRoute: '/incoming',
      getRedirectPath() {
        return '/';
      },
    },
    incomingCard: {
      route: '/incoming/:documentPackageId',
      getRedirectPath(documentPackageId: string) {
        return `/incoming/${documentPackageId}`;
      },
    },
    sentList: {
      route: '/sent',
      getRedirectPath() {
        return '/sent';
      },
    },
    sentCard: {
      route: '/sent/:documentPackageId',
      getRedirectPath(documentPackageId: string) {
        return `/sent/${documentPackageId}`;
      },
    },
    archivedList: {
      route: '/archived',
      getRedirectPath() {
        return '/archived';
      },
    },
    archivedCard: {
      route: '/archived/:documentPackageId',
      getRedirectPath(documentPackageId: string) {
        return `/archived/${documentPackageId}`;
      },
    },
  },
} as const;
