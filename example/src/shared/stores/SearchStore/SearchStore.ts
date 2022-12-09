import { makeAutoObservable } from 'mobx';

import { debounce } from '../../utils';

export class SearchStore {
  search: string = '';

  searchValue: string = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private setSearchValue = debounce((search: string) => {
    this.search = search;
  }, 1000);

  public setSearch = (search: string) => {
    this.searchValue = search;
    this.setSearchValue(search);
  };
}

export const createSearchStore = () => new SearchStore();
