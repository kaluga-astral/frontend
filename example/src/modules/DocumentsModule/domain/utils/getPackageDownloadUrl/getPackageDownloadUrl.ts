import { DOCUMENTS_API_URL } from '../../../data';

export const getPackageDownloadUrl = (packageId: string) =>
  `${DOCUMENTS_API_URL}/${packageId}/archive`;
