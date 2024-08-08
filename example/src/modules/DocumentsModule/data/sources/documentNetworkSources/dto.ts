import { type TableInputDTO, type TableMetaDTO } from '@example/shared';

import {
  type DocumentOperationType,
  type DocumentPackageOwner,
  type DocumentPackageState,
  type DocumentPackagesIncludes,
  type DocumentState,
  type PossibleOperationOnDocument,
  type PossibleOperationOnDocumentPackage,
  type RegistryType,
} from './enums';

/**
 * Модель данных документа
 * */
export type DocumentNetworkDTO = {
  /**
   * Идентификатор документа.
   * */
  documentId: string;
  /**
   * Ссылка на получение файла для подписания или расшифровки.
   * */
  documentContentUrl?: string;
  /**
   * Идентификатор пакета документов.
   * */
  documentPackageId: string;
  /**
   * Отображаемое имя.
   * */
  displayName?: string;
  /**
   * URL адрес, где можно запросить печатную форму документа.
   * */
  printFormUrl?: string;
  /**
   * Тип операции над документом.
   * */
  documentOperationType: DocumentOperationType;
  /**
   * Тип запрашиваемой операции (для отображения пользователю).
   * */
  operationDisplayName?: string;
  /**
   * Идентификатор результирующего файла, артефакта криптооперации.
   * */
  resultFileId: string;
  /**
   * Ссылка на загрузку файла.
   * */
  resultFileUrl?: string;
  /**
   * Наименование результирующего файла, артефакта криптооперации.
   * */
  resultFileName: string;
  /**
   * Статус документа.
   * */
  state: DocumentState;
  /**
   * Описание состояния документа.
   * */
  stateDisplayName?: string;
  /**
   * Дата-время обработки.
   * */
  proccessedAt?: string;
  /**
   * Список доступных действий над документом.
   * */
  allowedActions: PossibleOperationOnDocument[];
};

/**
 * Модель данных заявителя документа
 * */
export type RequesterNetworkDTO = {
  /**
   * Идентификатор пользователя экосистемы.
   * */
  userId: string;
  /**
   * Электронная почта.
   * */
  email?: string;
};

/**
 * Модель данных сертификата подписанта
 * */
export type CertificateInfoDto = {
  /**
   * ФИО подписанта
   * */
  person: string;
  /**
   * Название организации/ИП
   * */
  organization?: string;
  /**
   * ИНН организации
   * */
  organizationInn?: string;
  /**
   * ИНН подписанта
   * */
  innFl: string;
};

/**
 * Модель данных исполнителя документа
 * */
export type PerformerNetworkDTO = RequesterNetworkDTO;

/**
 * Модель данных пакета документов
 * */
export type DocumentPackagesNetworkDTO = {
  /**
   * Идентификатор пакета документов.
   * */
  documentPackageId: string;
  /**
   * Идентификатор трассировки.
   * */
  traceId: string;
  /**
   * Сервис-инициатор криптооперации.
   * */
  owner?: DocumentPackageOwner;
  /**
   * Наименование пакета документов.
   * */
  displayName?: string;
  /**
   * Заявитель документа
   * */
  requester: RequesterNetworkDTO;
  /**
   * Исполнитель документа
   * */
  performer: PerformerNetworkDTO;
  /**
   * Состояние запроса.
   * */
  state: DocumentPackageState;
  /**
   * Описание состояния пакета.
   * */
  stateDisplayName?: string;
  /**
   * Причина отклонения обработки пакета документов.
   * */
  rejectionReason?: string;
  /**
   * Комментарий запросившего подпись или расшифровку.
   * */
  comment?: string;
  /**
   * Дата-время создания пакета.
   * */
  createdAt: string;
  /**
   * Дата-время обновления записи.
   * */
  updatedAt?: string;
  /**
   * Дата-время завершения обработки.
   * */
  completedAt?: string;
  /**
   * Дата-время истечения срока ожидания выполнения.
   * */
  expiresAt?: string;
  /**
   * Удалить данные после указанной даты.
   * */
  deleteAfter?: string;
  /**
   * Параметры для выбора сертификата.
   * */
  certificateSelector?: string;
  /**
   * Данные подписанта - ФИО.
   * */
  certificateInfo?: CertificateInfoDto;
  /**
   * Список документов в пакете.
   * */
  documents: DocumentNetworkDTO[];
  /**
   * Список доступных действий над пакетом.
   * */
  allowedActions: PossibleOperationOnDocumentPackage[];
};

export type DocumentPackagesListNetworkDTO = TableMetaDTO & {
  /**
   * Список пакетов документов
   * */
  items: DocumentPackagesNetworkDTO[];
};

export type DocumentPackagesListInputNetworkDTO = TableInputDTO & {
  /**
   * Тип реестра.
   * */
  registryType: RegistryType;
  /**
   * Статус пакетов документов.
   * */
  documentPackageState?: DocumentPackageState;
  /**
   * Строка поиска.
   * */
  includes?: DocumentPackagesIncludes;
};
