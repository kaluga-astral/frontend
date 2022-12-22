import { DocumentPackageState } from '../../data';

export type ArchivedFilters = {
  status?: DocumentPackageState;
};

export type ChangeFilterFunc = (
  filter: keyof ArchivedFilters,
  value: DocumentPackageState,
) => void;
