/**
 * @description Тип операции над документом.
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
 * @description Сервис-инициатор криптооперации.
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
 * @description Состояние запроса.
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
 * @description Какие сущности включить в ответ.
 * */
export enum DocumentPackagesIncludes {
  None = 'None',
  Requester = 'Requester',
  Documents = 'Documents',
  Performer = 'Performer',
}

/**
 * @description Статус документа.
 * */
export enum DocumentState {
  Unknown = 'Unknown',
  Created = 'Created',
  Processed = 'Processed',
}

/**
 * @description Список доступных действий над документом.
 * */
export enum PossibleOperationOnDocument {
  None = 'None',
  CanSign = 'CanSign',
  CanDecrypt = 'CanDecrypt',
  CanPrint = 'CanPrint',
  CanDownload = 'CanDownload',
}

/**
 * @description Список доступных действий над пакетом.
 * */
export enum PossibleOperationOnDocumentPackage {
  None = 'None',
  CanProcess = 'CanProcess',
  CanDownloadArchive = 'CanDownloadArchive',
  CanReject = 'CanReject',
  CanArchive = 'CanArchive',
}

/**
 * @description Тип реестра.
 * */
export enum RegistryType {
  Unknown = 'Unknown',
  New = 'New',
  Completed = 'Completed',
  Archived = 'Archived',
}
