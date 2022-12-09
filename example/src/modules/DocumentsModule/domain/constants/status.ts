import { DocumentPackageState } from '../../data';

export const DOCUMENT_STATUS = {
  [DocumentPackageState.Unknown]: 'Все',
  [DocumentPackageState.Rejected]: 'Отклонено',
  [DocumentPackageState.Completed]: 'Отправлено',
  [DocumentPackageState.Created]: '',
  [DocumentPackageState.Expired]: '',
  [DocumentPackageState.Failed]: '',
};
