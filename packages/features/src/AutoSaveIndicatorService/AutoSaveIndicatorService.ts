import { AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE } from './constants';
import {
  type AutoSaveIndicatorErrorState,
  type IAutoSaveIndicatorService,
} from './types';
import { AutoSaveIndicatorStatus } from './enums';

/**
 * Сервис, предоставляющий API для более декларативной и централизованной работы с компонентом AutoSaveIndicator
 */
export class AutoSaveIndicatorService implements IAutoSaveIndicatorService {
  /**
   * Текущий статус.
   */
  private status: AutoSaveIndicatorStatus = AutoSaveIndicatorStatus.Idle;

  /**
   * Состояние видимости
   */
  private isShouldBeVisible = false;

  /**
   * Объект с сообщением об ошибке и функцией обратного вызова
   */
  private error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;

  /**
   * Метод для отображения компонента
   */
  public show = () => {
    this.isShouldBeVisible = true;
  };

  /**
   * Метод для сброса состояния до изначального
   */
  public reset = () => {
    this.status = AutoSaveIndicatorStatus.Idle;
    this.error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;
  };

  /**
   * Метод для скрытия компонента
   */
  public hide = () => {
    this.isShouldBeVisible = false;
    this.reset();
  };

  /**
   * Метод для индикации состояния загрузки во время сохранения
   */
  public progress = () => {
    this.status = AutoSaveIndicatorStatus.Progress;
  };

  /**
   * Метод для индикации состояния успеха
   */
  public success = () => {
    this.status = AutoSaveIndicatorStatus.Success;
    this.error = AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE;
  };

  /**
   * Метод для установки текста ошибки и функции обратного вызова, которая должна сработать при клике на кнопку
   */
  public setError = (error: AutoSaveIndicatorErrorState) => {
    this.status = AutoSaveIndicatorStatus.Error;
    this.error = error;
  };

  /**
   * Флаг, отражающий состояние видимости AutoSaveIndicator
   */
  public get isVisible() {
    return this.isShouldBeVisible;
  }

  /**
   * Вспомогательный метод для проверки текущего статуса
   */
  private checkStatus = (status: AutoSaveIndicatorStatus) => {
    return this.status === status;
  };

  /**
   * Пропсы для компонента AutoSaveIndicator
   */
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
