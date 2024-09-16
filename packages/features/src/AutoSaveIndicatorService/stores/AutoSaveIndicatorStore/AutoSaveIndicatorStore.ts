import { makeAutoObservable } from 'mobx';

import { AutoSaveIndicatorService } from '../../services';

/**
 * Mobx-Store для декларативной работы с компонентом AutoSaveIndicator
 */
export class AutoSaveIndicatorStore {
  private readonly autoSaveIndicatorService: AutoSaveIndicatorService =
    new AutoSaveIndicatorService();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makeAutoObservable(this.autoSaveIndicatorService, {}, { autoBind: true });
  }

  /**
   * Скрывает компонент
   */
  public get hide() {
    return this.autoSaveIndicatorService.hide;
  }

  /**
   * Отображает компонента
   */
  public get show() {
    return this.autoSaveIndicatorService.show;
  }

  /**
   * Отображает состояния загрузки во время сохранения
   */
  public get progress() {
    return this.autoSaveIndicatorService.progress;
  }

  /**
   * Отображает состояния успеха
   */
  public get success() {
    return this.autoSaveIndicatorService.success;
  }

  /**
   * Сбрасывает состояние всех значений до изначального
   */
  public get reset() {
    return this.autoSaveIndicatorService.reset;
  }

  /**
   * Устанавливает текст ошибки и callback, который должен сработать при клике на кнопку
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
