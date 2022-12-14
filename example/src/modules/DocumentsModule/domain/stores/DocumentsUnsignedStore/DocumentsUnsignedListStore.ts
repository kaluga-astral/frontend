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
  DocumentPackagesDTO,
  DocumentPackagesListDTO,
  DocumentPackagesListInputDTO,
  RegistryType,
} from '../../../data';
import { DocumentsUnsignedListSorting } from '../../types';
import {
  DocumentsUnsignedListInit,
  FETCH_UNSIGNED_DOCUMENTS_ERROR_MESSAGE,
} from '../../constants';

export class DocumentsUnsignedListStore {
  /**
   * @description Тип запрашиваемого документа
   * */
  private readonly documentType: RegistryType = RegistryType.New;

  /**
   * @description Список пакетов документов
   * */
  public unsigned: DocumentPackagesListDTO = DocumentsUnsignedListInit;

  /**
   * @description Флажок отключения кнопок действий в хедере
   * */
  public isDisabledHeaderActions: boolean = true;

  public searchState: SearchStore;

  public asyncState: AsyncStateStore;

  public dataGridState: DataGridStore<DocumentsUnsignedListSorting>;

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
    pageSize: this.dataGridState.pageSize,
    pageIndex: this.dataGridState.page,
  });

  public setUnsignedDocuments = ({
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
      this.unsigned = data;
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
    sorting?: DataGridSort<DocumentsUnsignedListSorting>,
  ) => {
    this.dataGridState.setSorting(sorting);
  };

  /**
   * @description Selected
   * */
  get selected() {
    return this.dataGridState.selected;
  }

  public handleSelectRows = (rows: DocumentPackagesDTO[]) => {
    this.isDisabledHeaderActions = !Boolean(rows.length);
    this.dataGridState.setSelected(rows);
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

export const createDocumentsUnsignedListStore = () =>
  new DocumentsUnsignedListStore();
