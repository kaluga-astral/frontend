import {
  QueryClient,
  RepositoryFetchParams,
  createCachedQuery,
  queryClient as queryClientInstance,
} from '@example/shared';

import {
  DocumentsNetworkSources,
  documentNetworkSources as documentNetworkSourcesInstance,
} from '../../sources';

import { DocumentPackagesListDTO, DocumentPackagesListInputDTO } from './dto';

/**
 * @description Репозиторий для работы с документами
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
   * @description Получение списка пакетов документов
   * */
  public getDocumentPackages = async (
    params: DocumentPackagesListInputDTO,
    config?: RepositoryFetchParams,
  ) =>
    createCachedQuery<DocumentPackagesListDTO>(
      this.queryClient,
      this.getDocumentsCacheQuery(params),
      async () => {
        const result = await this.documentsNetworkSources.getDocumentsPackages(
          params,
        );

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
