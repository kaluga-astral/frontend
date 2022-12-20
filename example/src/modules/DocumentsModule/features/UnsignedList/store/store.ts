import { makeAutoObservable } from 'mobx';

import { DocumentPackagesDTO } from '@example/modules/DocumentsModule';

export class UnsignedListStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public formatCreatedDate = ({
    createdAt,
  }: Pick<DocumentPackagesDTO, 'createdAt'>) =>
    new Date(createdAt).toLocaleString();
}

export const createUnsignedListStore = () => new UnsignedListStore();
