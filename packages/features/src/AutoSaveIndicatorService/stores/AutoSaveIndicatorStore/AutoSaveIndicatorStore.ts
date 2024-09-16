import { makeAutoObservable } from 'mobx';

import { AutoSaveIndicatorService } from '../../AutoSaveIndicatorService';

/**
 * Стор для декларативной работы с компонентом AutoSaveIndicator
 */
export class AutoSaveIndicatorStore {
  private readonly autoSaveIndicatorService: AutoSaveIndicatorService =
    new AutoSaveIndicatorService();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makeAutoObservable(this.autoSaveIndicatorService, {}, { autoBind: true });
  }

  /**
   * Метод для скрытия компонента
   */
  public get hide() {
    return this.autoSaveIndicatorService.hide;
  }

  /**
   * Метод для отображения компонента
   */
  public get show() {
    return this.autoSaveIndicatorService.show;
  }

  /**
   * Метод для индикации состояния загрузки во время сохранения
   */
  public get progress() {
    return this.autoSaveIndicatorService.progress;
  }

  /**
   * Метод для индикации состояния успеха
   */
  public get success() {
    return this.autoSaveIndicatorService.success;
  }

  /**
   * Метод для сброса состояния до изначального
   */
  public get reset() {
    return this.autoSaveIndicatorService.reset;
  }

  /**
   * Метод для установки текста ошибки и callback, который должен сработать при клике на кнопку
   */
  public get setError() {
    return this.autoSaveIndicatorService.setError;
  }

  /**
   * Пропсы для компонента AutoSaveIndicator
   */
  public get values() {
    return this.autoSaveIndicatorService.values;
  }

  /**
   * Флаг, отражающий состояние видимости AutoSaveIndicator
   */
  public get isVisible() {
    return this.autoSaveIndicatorService.isVisible;
  }
}
