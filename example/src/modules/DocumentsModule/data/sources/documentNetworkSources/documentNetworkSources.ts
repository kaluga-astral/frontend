import { apiHttpClient } from '@example/shared';

import {
  type DocumentPackagesListInputNetworkDTO,
  type DocumentPackagesListNetworkDTO,
} from './dto';

export const DOCUMENTS_API_URL = 'documents';

/**
 * Источник запросов для работы с документами
 * */
export const documentNetworkSources = {
  /**
   * Запрос на получения списка пакетов документов
   * */
  getDocumentsPackages: (params: DocumentPackagesListInputNetworkDTO) =>
    apiHttpClient.get<DocumentPackagesListNetworkDTO>(DOCUMENTS_API_URL, {
      params: {
        ...params,
      },
    }),

  moveToArchive: (packageId: string) =>
    apiHttpClient.post(`${DOCUMENTS_API_URL}/${packageId}/archivate`),
};

export type DocumentsNetworkSources = typeof documentNetworkSources;
