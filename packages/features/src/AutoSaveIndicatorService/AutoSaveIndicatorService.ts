import { AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE } from './constants';
import {
  type AutoSaveIndicatorErrorState,
  type IAutoSaveIndicatorService,
} from './types';
import { AutoSaveIndicatorStatus } from './enums';

export class AutoSaveIndicatorService implements IAutoSaveIndicatorService {
  private status: AutoSaveIndicatorStatus = AutoSaveIndicatorStatus.Idle;

  private isShouldBeVisible = false;

  private error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;

  public show = () => {
    this.isShouldBeVisible = true;
  };

  public reset = () => {
    this.status = AutoSaveIndicatorStatus.Idle;
    this.error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;
  };

  public hide = () => {
    this.isShouldBeVisible = false;
    this.reset();
  };

  public progress = () => {
    this.status = AutoSaveIndicatorStatus.Progress;
  };

  public success = () => {
    this.status = AutoSaveIndicatorStatus.Success;
    this.error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;
  };

  public setError = (error: AutoSaveIndicatorErrorState) => {
    this.status = AutoSaveIndicatorStatus.Error;
    this.error = error;
  };

  public get isVisible() {
    return this.isShouldBeVisible;
  }

  private checkStatus = (status: AutoSaveIndicatorStatus) => {
    return this.status === status;
  };

  public get values() {
    return {
      isLoading: this.checkStatus(AutoSaveIndicatorStatus.Progress),
      errorMsg: this.error.message,
      isError: this.checkStatus(AutoSaveIndicatorStatus.Error),
      onRetry: this.error.onRetry,
      isSuccess: this.checkStatus(AutoSaveIndicatorStatus.Success),
    };
  }
}
