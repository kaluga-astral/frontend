import { makeAutoObservable } from 'mobx';
import { type ChangeEvent } from 'react';

import {
  type AsyncStateStore,
  type DataGridSort,
  type DataGridStore,
  FilterStore,
  type SearchStore,
  type UseQueryResult,
  createAsyncStateStore,
  createDataGridStore,
  createSearchStore,
  notify,
} from '@example/shared';

import {
  type DocumentPackageState,
  DocumentPackagesIncludes,
  type DocumentPackagesListDTO,
  type DocumentPackagesListInputDTO,
  RegistryType,
} from '../../../data';
import {
  type ArchivedFilters,
  type DocumentsUnsignedListSorting,
} from '../../types';
import {
  DocumentsUnsignedListInit,
  FETCH_UNSIGNED_DOCUMENTS_ERROR_MESSAGE,
} from '../../constants';

export class DocumentsArchivedStore {
  /**
   * Тип запрашиваемого документа
   * */
  private readonly documentType: RegistryType = RegistryType.Archived;

  /**
   * Список пакетов документов
   * */
  public archived: DocumentPackagesListDTO = DocumentsUnsignedListInit;

  public searchState: SearchStore;

  public asyncState: AsyncStateStore;

  public dataGridState: DataGridStore<DocumentsUnsignedListSorting>;

  public filtersState: FilterStore<ArchivedFilters>;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.asyncState = createAsyncStateStore();
    this.searchState = createSearchStore();
    this.dataGridState = createDataGridStore();
    this.filtersState = new FilterStore<ArchivedFilters>({ status: undefined });
  }

  /**
   * Fetch Data
   * */
  public getFetchQueryParams = (): DocumentPackagesListInputDTO => ({
    documentPackageState: this.filters.status,
    filter: this.search,
    sortBy: this.sorting?.fieldId,
    sortType: this.sorting?.sort,
    registryType: this.documentType,
    pageSize: this.pageSize,
    pageIndex: this.page,
    includes: DocumentPackagesIncludes.Performer,
  });

  public setArchivedDocuments = ({
    isSuccess,
    data,
    error,
  }: UseQueryResult<DocumentPackagesListDTO>): void => {
    this.asyncState.start();

    if (error && !data) {
      const message = error?.message || FETCH_UNSIGNED_DOCUMENTS_ERROR_MESSAGE;

      this.asyncState.fail(message);
      notify.error(message);

      return;
    }

    if (isSuccess) {
      this.archived = data;
      this.asyncState.success();
    }
  };

  get loadingState() {
    return this.asyncState.state;
  }

  /**
   * Header Search
   * */
  get searchValue() {
    return this.searchState.searchValue;
  }

  get search() {
    return this.searchState.search;
  }

  public handleChangeSearch = (search: string) => {
    this.searchState.setSearch(search);
  };

  /**
   * Sorting
   * */
  get sorting() {
    return this.dataGridState.sorting;
  }

  public handleChangeSort = (
    sorting?: DataGridSort<DocumentsUnsignedListSorting>,
  ) => {
    this.dataGridState.setSorting(sorting);
  };

  /**
   * Pagination
   * */
  get page() {
    return this.dataGridState.page;
  }

  get pageSize() {
    return this.dataGridState.pageSize;
  }

  public handleChangePage = (_event: ChangeEvent<unknown>, page: number) => {
    this.dataGridState.setPage(page);
  };

  /**
   * Page Filters
   * */
  get filters() {
    return this.filtersState.filters;
  }

  public handleChangeFilter = (
    filter: keyof ArchivedFilters,
    value?: DocumentPackageState,
  ) => {
    this.filtersState.setFilter(filter, value);
  };
}

export const createDocumentsArchiveListStore = () =>
  new DocumentsArchivedStore();
