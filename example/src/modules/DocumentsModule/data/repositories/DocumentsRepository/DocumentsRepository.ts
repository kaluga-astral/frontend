import {
  type QueryClient,
  type RepositoryFetchParams,
  createCachedQuery,
  queryClient as queryClientInstance,
} from '@example/shared';

import {
  type DocumentsNetworkSources,
  documentNetworkSources as documentNetworkSourcesInstance,
} from '../../sources';

import {
  type DocumentPackagesListDTO,
  type DocumentPackagesListInputDTO,
} from './dto';

/**
 * Репозиторий для работы с документами
 * */
export class DocumentsRepository {
  private readonly documentsCacheID = 'documentsCacheID';

  constructor(
    private readonly documentsNetworkSources: DocumentsNetworkSources,
    private readonly queryClient: QueryClient,
  ) {
    this.documentsNetworkSources = documentsNetworkSources;
    this.queryClient = queryClient;
  }

  public getDocumentsCacheQuery = (params: DocumentPackagesListInputDTO) => [
    this.documentsCacheID,
    JSON.stringify(params),
  ];

  /**
   * Получение списка пакетов документов
   * */
  public getDocumentPackages = async (
    params: DocumentPackagesListInputDTO,
    config?: RepositoryFetchParams,
  ) =>
    createCachedQuery<DocumentPackagesListDTO>(
      this.queryClient,
      this.getDocumentsCacheQuery(params),
      async () => {
        const result =
          await this.documentsNetworkSources.getDocumentsPackages(params);

        return result.data;
      },
      config,
    );

  public moveToArchive = (packageId: string) =>
    this.documentsNetworkSources.moveToArchive(packageId);
}

export const documentsRepository = new DocumentsRepository(
  documentNetworkSourcesInstance,
  queryClientInstance,
);
