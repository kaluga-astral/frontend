import { makeAutoObservable } from 'mobx';

export class PaginationStore {
  public page = 1;

  public pageSize = 10;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setPage = (page: number) => {
    this.page = page;
  };

  public setPageSize = (pageSize: number) => {
    this.pageSize = pageSize;
  };
}

export const createPaginationStore = () => new PaginationStore();
