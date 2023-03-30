/**
 * @description Тип операции.
 * */
export enum OperationType {
  Unknown = 'Unknown',
  Sign = 'Sign',
  Decrypt = 'Decrypt',
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

export const OperationTypeTitle = {
  [OperationType.Unknown]: '',
  [OperationType.Sign]: 'Подписание документа',
  [OperationType.Decrypt]: 'Расшифровка документа',
};

export const OperationTypeConfirmButtonText = {
  [OperationType.Unknown]: '',
  [OperationType.Sign]: 'Подписать',
  [OperationType.Decrypt]: 'Расшифровать',
};

export const OperationTypeActions = {
  [OperationType.Unknown]: PossibleOperationOnDocument.None,
  [OperationType.Sign]: PossibleOperationOnDocument.CanSign,
  [OperationType.Decrypt]: PossibleOperationOnDocument.CanDecrypt,
};
