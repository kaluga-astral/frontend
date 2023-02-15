import { makeAutoObservable } from 'mobx';

export class FilterStore<Filters extends Record<string, unknown>> {
  public filters: Filters = {} as Filters;

  constructor(filters: Filters) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.filters = filters;
  }

  public setFilter = (key: keyof Filters, value: Filters[keyof Filters]) => {
    this.filters[key] = value;
  };

  public removeFilter = (key: keyof Filters) => {
    delete this.filters[key];
  };
}

export const createFilterStore =
  <Filters extends Record<string, unknown>>(filters: Filters) =>
  () =>
    new FilterStore(filters);
