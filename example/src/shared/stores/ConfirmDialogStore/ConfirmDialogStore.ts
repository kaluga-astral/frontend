import { makeAutoObservable } from 'mobx';

export class ConfirmDialogStore {
  public isCancelLoading = false;

  public isConfirmLoading = false;

  public open = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public resetLoadingStates = () => {
    this.isCancelLoading = false;
    this.isConfirmLoading = false;
  };

  public setCancelLoading = (state: boolean) => {
    this.isCancelLoading = state;
  };

  public setConfirmLoading = (state: boolean) => {
    this.isConfirmLoading = state;
  };

  public openDialog = () => {
    this.open = true;
  };

  public closeDialog = () => {
    this.resetLoadingStates();
    this.open = false;
  };
}

export const createConfirmDialogStore = () => new ConfirmDialogStore();
