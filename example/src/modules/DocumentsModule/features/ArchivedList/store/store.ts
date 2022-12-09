import { makeAutoObservable } from 'mobx';

import { DocumentPackagesDTO } from '../../../data';

export class ArchivedListStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public formatUpdateDate = ({
    updatedAt,
  }: Pick<DocumentPackagesDTO, 'updatedAt'>) =>
    updatedAt && new Date(updatedAt).toLocaleString();
}

export const createArchivedListStore = () => new ArchivedListStore();
