import { makeAutoObservable } from 'mobx';

import { IndicatorColor, TypographyColor } from '@example/shared';
import { DocumentPackageState } from '@example/modules/DocumentsModule';

export class StatusStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public getIndicatorColor = (
    statusState: DocumentPackageState,
  ): IndicatorColor => {
    if (statusState === DocumentPackageState.Rejected) {
      return 'error';
    }

    return 'primary';
  };

  public getLabelColor = (
    statusState: DocumentPackageState,
  ): TypographyColor => {
    if (statusState === DocumentPackageState.Rejected) {
      return 'error';
    }

    return 'text';
  };
}

export const createStatusStore = () => new StatusStore();
