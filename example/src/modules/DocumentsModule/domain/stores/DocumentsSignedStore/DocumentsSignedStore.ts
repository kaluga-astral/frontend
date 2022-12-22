import { makeAutoObservable } from 'mobx';
import { ChangeEvent } from 'react';

import {
  AsyncStateStore,
  DataGridSort,
  DataGridStore,
  SearchStore,
  UseQueryResult,
  createAsyncStateStore,
  createDataGridStore,
  createSearchStore,
  notify,
} from '@example/shared';

import {
  DocumentPackagesIncludes,
  DocumentPackagesListDTO,
  DocumentPackagesListInputDTO,
  RegistryType,
} from '../../../data';
import { DocumentsSignedListSorting } from '../../types';
import {
  DocumentsSignedListInit,
  FETCH_SIGNED_DOCUMENTS_ERROR_MESSAGE,
} from '../../constants';

export class DocumentsSignedListStore {
  /**
   * @description Тип запрашиваемого документа
   * */
  private readonly documentType: RegistryType = RegistryType.Completed;

  /**
   * @description Список пакетов документов
   * */
  public signed: DocumentPackagesListDTO = DocumentsSignedListInit;

  /**
   * @description Флажок отключения кнопок действий в хедере
   * */

  public searchState: SearchStore;

  public asyncState: AsyncStateStore;

  public dataGridState: DataGridStore<DocumentsSignedListSorting>;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.asyncState = createAsyncStateStore();
    this.searchState = createSearchStore();
    this.dataGridState = createDataGridStore();
  }

  /**
   * @description Fetch Data
   * */
  public getFetchQueryParams = (): DocumentPackagesListInputDTO => ({
    filter: this.searchState.search,
    sortBy: this.dataGridState.sorting?.fieldId,
    sortType: this.dataGridState.sorting?.sort,
    registryType: this.documentType,
    includes: DocumentPackagesIncludes.Performer,
    pageSize: this.dataGridState.pageSize,
    pageIndex: this.dataGridState.page,
  });

  public setSignedDocuments = ({
    isSuccess,
    data,
    error,
  }: UseQueryResult<DocumentPackagesListDTO>): void => {
    this.asyncState.start();

    if (error && !data) {
      const message = error?.message || FETCH_SIGNED_DOCUMENTS_ERROR_MESSAGE;

      this.asyncState.fail(message);
      notify.error(message);

      return;
    }

    if (isSuccess) {
      this.signed = data;
      this.asyncState.success();
    }
  };

  get loadingState() {
    return this.asyncState.state;
  }

  /**
   * @description Header Search
   * */
  get searchValue() {
    return this.searchState.searchValue;
  }

  public handleChangeSearch = (search: string) => {
    this.searchState.setSearch(search);
  };

  /**
   * @description Sorting
   * */
  get sorting() {
    return this.dataGridState.sorting;
  }

  public handleChangeSort = (
    sorting?: DataGridSort<DocumentsSignedListSorting>,
  ) => {
    this.dataGridState.setSorting(sorting);
  };

  /**
   * @description Pagination
   * */
  get page() {
    return this.dataGridState.page;
  }

  public handleChangePage = (_event: ChangeEvent<unknown>, page: number) => {
    this.dataGridState.setPage(page);
  };
}

export const createDocumentsSignedListStore = () =>
  new DocumentsSignedListStore();
