import { makeAutoObservable } from 'mobx';

import { DocumentPackagesDTO } from '@example/modules/DocumentsModule';

export class SelectedRowStore {
  public selected: DocumentPackagesDTO[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSelected = (selected: DocumentPackagesDTO[]) => {
    this.selected = selected;
  };
}

export const createSelectedStore = () => new SelectedRowStore();
