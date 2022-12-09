import { makeAutoObservable } from 'mobx';

import { notify } from '@example/shared';

import { DocumentPackagesDTO, documentsRepository } from '../../../data';

type HandleArchiveButtonClickParams = {
  data: DocumentPackagesDTO;
  refetchList: () => void;
};

export class SignedListStore {
  public isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public formatCompletedDate = ({
    completedAt = '',
  }: Pick<DocumentPackagesDTO, 'completedAt'>) =>
    new Date(completedAt).toLocaleString();

  public handleArchiveButtonClick =
    ({ data, refetchList }: HandleArchiveButtonClickParams) =>
    async () => {
      const { documentPackageId, displayName } = data;

      this.isLoading = true;

      try {
        await documentsRepository.moveToArchive(documentPackageId);
        notify.success(`Документ “${displayName}” перенесен в архив`);
      } catch ({ message }) {
        notify.error(message as string);
      }

      this.isLoading = false;
      refetchList();
    };
}

export const createSignedListStore = () => new SignedListStore();
