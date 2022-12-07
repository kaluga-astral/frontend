import { TableInputDTO, TableMetaDTO } from '@example/shared';

import {
  DocumentOperationType,
  DocumentPackageOwner,
  DocumentPackageState,
  DocumentPackagesIncludes,
  DocumentState,
  PossibleOperationOnDocument,
  PossibleOperationOnDocumentPackage,
  RegistryType,
} from './enums';

/**
 * @description Модель данных документа
 * */
export type DocumentNetworkDTO = {
  /**
   * @description Идентификатор документа.
   * */
  documentId: string;
  /**
   * @description Ссылка на получение файла для подписания или расшифровки.
   * */
  documentContentUrl?: string;
  /**
   * @description Идентификатор пакета документов.
   * */
  documentPackageId: string;
  /**
   * @description Отображаемое имя.
   * */
  displayName?: string;
  /**
   * @description URL адрес, где можно запросить печатную форму документа.
   * */
  printFormUrl?: string;
  /**
   * @description Тип операции над документом.
   * */
  documentOperationType: DocumentOperationType;
  /**
   * @description Тип запрашиваемой операции (для отображения пользователю).
   * */
  operationDisplayName?: string;
  /**
   * @description Идентификатор результирующего файла, артефакта криптооперации.
   * */
  resultFileId: string;
  /**
   * @description Ссылка на загрузку файла.
   * */
  resultFileUrl?: string;
  /**
   * @description Наименование результирующего файла, артефакта криптооперации.
   * */
  resultFileName: string;
  /**
   * @description Статус документа.
   * */
  state: DocumentState;
  /**
   * @description Описание состояния документа.
   * */
  stateDisplayName?: string;
  /**
   * @description Дата-время обработки.
   * */
  proccessedAt?: string;
  /**
   * @description Список доступных действий над документом.
   * */
  allowedActions: PossibleOperationOnDocument[];
};

/**
 * @description Модель данных заявителя документа
 * */
export type RequesterNetworkDTO = {
  /**
   * @description Идентификатор пользователя экосистемы.
   * */
  userId: string;
  /**
   * @description Электронная почта.
   * */
  email?: string;
};

/**
 * @description Модель данных сертификата подписанта
 * */
export type CertificateInfoDto = {
  /**
   * @description ФИО подписанта
   * */
  person: string;
  /**
   * @description Название организации/ИП
   * */
  organization?: string;
  /**
   * @description ИНН организации
   * */
  organizationInn?: string;
  /**
   * @description ИНН подписанта
   * */
  innFl: string;
};

/**
 * @description Модель данных исполнителя документа
 * */
export type PerformerNetworkDTO = RequesterNetworkDTO;

/**
 * @description Модель данных пакета документов
 * */
export type DocumentPackagesNetworkDTO = {
  /**
   * @description Идентификатор пакета документов.
   * */
  documentPackageId: string;
  /**
   * @description Идентификатор трассировки.
   * */
  traceId: string;
  /**
   * @description Сервис-инициатор криптооперации.
   * */
  owner?: DocumentPackageOwner;
  /**
   * @description Наименование пакета документов.
   * */
  displayName?: string;
  /**
   * @description Заявитель документа
   * */
  requester: RequesterNetworkDTO;
  /**
   * @description Исполнитель документа
   * */
  performer: PerformerNetworkDTO;
  /**
   * @description Состояние запроса.
   * */
  state: DocumentPackageState;
  /**
   * @description Описание состояния пакета.
   * */
  stateDisplayName?: string;
  /**
   * @description Причина отклонения обработки пакета документов.
   * */
  rejectionReason?: string;
  /**
   * @description Коментарий запросившего подпись или расшифровку.
   * */
  comment?: string;
  /**
   * @description Дата-время создания пакета.
   * */
  createdAt: string;
  /**
   * @description Дата-время обновления записи.
   * */
  updatedAt?: string;
  /**
   * @description Дата-время завершения обработки.
   * */
  completedAt?: string;
  /**
   * @description Дата-время истечения срока ожидания выполнения.
   * */
  expiresAt?: string;
  /**
   * @description Удалить данные после указанной даты.
   * */
  deleteAfter?: string;
  /**
   * @description Параметры для выбора сертификата.
   * */
  certificateSelector?: string;
  /**
   * @description Данные подписанта - ФИО.
   * */
  certificateInfo?: CertificateInfoDto;
  /**
   * @description Список документов в пакете.
   * */
  documents: DocumentNetworkDTO[];
  /**
   * @description Список доступных действий над пакетом.
   * */
  allowedActions: PossibleOperationOnDocumentPackage[];
};

export type DocumentPackagesListNetworkDTO = TableMetaDTO & {
  /**
   * @description Список пакетов документов
   * */
  items: DocumentPackagesNetworkDTO[];
};

export type DocumentPackagesListInputNetworkDTO = TableInputDTO & {
  /**
   * @description Тип реестра.
   * */
  registryType: RegistryType;
  /**
   * @description Статус пакетов документов.
   * */
  documentPackageState?: DocumentPackageState;
  /**
   * @description Строка поиска.
   * */
  includes?: DocumentPackagesIncludes;
};
