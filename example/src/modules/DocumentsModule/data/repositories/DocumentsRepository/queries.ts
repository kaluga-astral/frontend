import { UseQueryOptions, useQuery } from '@example/shared';

import { DocumentPackagesListDTO, DocumentPackagesListInputDTO } from './dto';
import { documentsRepository } from './DocumentsRepository';

export const useDocumentsQuery = (
  params: DocumentPackagesListInputDTO,
  options?: UseQueryOptions<DocumentPackagesListDTO>,
) =>
  useQuery(
    documentsRepository.getDocumentsCacheQuery(params),
    () => documentsRepository.getDocumentPackages(params),
    options,
  );
