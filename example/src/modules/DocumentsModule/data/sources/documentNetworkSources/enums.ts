/**
 * Тип операции над документом.
 * */
export enum DocumentOperationType {
  Unknown = 'Unknown',
  SignAttachedCms = 'SignAttachedCms',
  SignDetachedCms = 'SignDetachedCms',
  SignXmlDSigEnveloped = 'SignXmlDSigEnveloped',
  SignXmlDSigEnveloping = 'SignXmlDSigEnveloping',
  SignXmlDSigTemplate = 'SignXmlDSigTemplate',
  DecryptCms = 'DecryptCms',
  DecryptXml = 'DecryptXml',
}

/**
 * Сервис-инициатор криптооперации.
 * */
export enum DocumentPackageOwner {
  Unknown = 'Unknown',
  WebReport = 'WebReport',
  Poa = 'Poa',
  Edo = 'Edo',
  AstralPlatform = 'AstralPlatform',
  Report1C = 'Report1C',
  AstralReport = 'AstralReport ',
}

/**
 * Состояние запроса.
 * */
export enum DocumentPackageState {
  Unknown = 'Unknown',
  Created = 'Created',
  Completed = 'Completed',
  Rejected = 'Rejected',
  Failed = 'Failed',
  Expired = 'Expired',
}

/**
 * Какие сущности включить в ответ.
 * */
export enum DocumentPackagesIncludes {
  None = 'None',
  Requester = 'Requester',
  Documents = 'Documents',
  Performer = 'Performer',
}

/**
 * Статус документа.
 * */
export enum DocumentState {
  Unknown = 'Unknown',
  Created = 'Created',
  Processed = 'Processed',
}

/**
 * Список доступных действий над документом.
 * */
export enum PossibleOperationOnDocument {
  None = 'None',
  CanSign = 'CanSign',
  CanDecrypt = 'CanDecrypt',
  CanPrint = 'CanPrint',
  CanDownload = 'CanDownload',
}

/**
 * Список доступных действий над пакетом.
 * */
export enum PossibleOperationOnDocumentPackage {
  None = 'None',
  CanProcess = 'CanProcess',
  CanDownloadArchive = 'CanDownloadArchive',
  CanReject = 'CanReject',
  CanArchive = 'CanArchive',
}

/**
 * Тип реестра.
 * */
export enum RegistryType {
  Unknown = 'Unknown',
  New = 'New',
  Completed = 'Completed',
  Archived = 'Archived',
}
