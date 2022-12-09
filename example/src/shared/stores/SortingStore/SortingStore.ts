import { makeAutoObservable } from 'mobx';

import { DataGridSort } from '../../ui';

export class SortingStore<Sorting> {
  public sorting: DataGridSort<Sorting> | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSorting = (sorting?: DataGridSort<Sorting>) => {
    this.sorting = sorting;
  };
}

export function createSortingStore<Sorting>() {
  return new SortingStore<Sorting>();
}
