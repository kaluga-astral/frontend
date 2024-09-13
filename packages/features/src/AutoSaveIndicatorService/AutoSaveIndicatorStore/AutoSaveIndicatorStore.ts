import { makeAutoObservable } from 'mobx';

import { AutoSaveIndicatorService } from '../AutoSaveIndicatorService';

export class AutoSaveIndicatorStore {
  private readonly autoSaveIndicatorService: AutoSaveIndicatorService =
    new AutoSaveIndicatorService();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makeAutoObservable(this.autoSaveIndicatorService, {}, { autoBind: true });
  }

  public get hide() {
    return this.autoSaveIndicatorService.hide;
  }

  public get show() {
    return this.autoSaveIndicatorService.show;
  }

  public get progress() {
    return this.autoSaveIndicatorService.progress;
  }

  public get success() {
    return this.autoSaveIndicatorService.success;
  }

  public get reset() {
    return this.autoSaveIndicatorService.reset;
  }

  public get setError() {
    return this.autoSaveIndicatorService.setError;
  }

  public get values() {
    return this.autoSaveIndicatorService.values;
  }

  public get isVisible() {
    return this.autoSaveIndicatorService.isVisible;
  }
}

export const autoSaveIndicatorStoreInstance = new AutoSaveIndicatorStore();
