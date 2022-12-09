import { makeAutoObservable } from 'mobx';

import { DocumentPackageState } from '../../../data';
import {
  ArchivedFilters,
  ChangeFilterFunc,
  DOCUMENT_STATUS,
} from '../../../domain';

export class ArchivedFiltersStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public archivedStatusList = [
    DocumentPackageState.Unknown,
    DocumentPackageState.Completed,
    DocumentPackageState.Rejected,
  ];

  public getOptionLabel = (value: string | number) => {
    return `Статус: ${DOCUMENT_STATUS[value as DocumentPackageState]}`;
  };

  public handleChangeFilter =
    (onChangeFilter: ChangeFilterFunc, filter: keyof ArchivedFilters) =>
    // TODO: в ui-kite нужно экспортить тип SelectChangeEvent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      const value = event.target.value;

      onChangeFilter(filter, value);
    };
}

export const createArchiveFiltersStore = () => new ArchivedFiltersStore();
