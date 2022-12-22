import { makeAutoObservable } from 'mobx';

import { DataGridSort } from '@example/shared';
import { DocumentPackagesDTO } from '@example/modules/DocumentsModule';

import { SelectedRowStore, createSelectedStore } from '../SelectedRowStore';
import { PaginationStore, createPaginationStore } from '../PaginationStore';
import { SortingStore, createSortingStore } from '../SortingStore';

export class DataGridStore<Sorting> {
  public paginationState: PaginationStore;

  public sortingState: SortingStore<Sorting>;

  public selectedRowState: SelectedRowStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.paginationState = createPaginationStore();
    this.sortingState = createSortingStore();
    this.selectedRowState = createSelectedStore();
  }

  /**
   * @description Pagination
   * */
  get page() {
    return this.paginationState.page;
  }

  get pageSize() {
    return this.paginationState.pageSize;
  }

  public setPage = (page: number) => {
    this.paginationState.setPage(page);
  };

  public setPageSize = (pageSize: number) => {
    this.paginationState.setPageSize(pageSize);
  };

  /**
   * @description Sorting
   * */
  get sorting() {
    return this.sortingState.sorting;
  }

  setSorting = (sorting?: DataGridSort<Sorting>) => {
    return this.sortingState.setSorting(sorting);
  };

  /**
   * @description Selected
   * */
  get selected() {
    return this.selectedRowState.selected;
  }

  setSelected = (selected: DocumentPackagesDTO[]) => {
    this.selectedRowState.setSelected(selected);
  };
}

export function createDataGridStore<Sorting>() {
  return new DataGridStore<Sorting>();
}
