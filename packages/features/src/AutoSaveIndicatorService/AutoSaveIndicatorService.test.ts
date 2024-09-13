import { describe, expect, it, vi } from 'vitest';

import { AutoSaveIndicatorService } from './AutoSaveIndicatorService';
import { AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE } from './constants';

describe('AutoSaveIndicatorService', () => {
  let service: AutoSaveIndicatorService;

  beforeEach(() => {
    service = new AutoSaveIndicatorService();
  });

  it('Инициализируется с дефолтными значениями', () => {
    expect(service.values.isLoading).toBeFalsy();
    expect(service.values.isError).toBeFalsy();
    expect(service.values.isSuccess).toBeFalsy();
    expect(service.isVisible).toBeFalsy();
  });

  it('Произойдет установка ошибки в состояние при вызове метода setError', () => {
    const error = {
      message: 'Произошла ошибка при выполнении запроса',
      onRetry: vi.fn(),
    };

    service.show();
    service.progress();
    service.setError(error);
    expect(service.values.isError).toBeTruthy();
    expect(service.values.errorMsg).toBe(error.message);
    expect(service.values.onRetry).toBe(error.onRetry);
  });

  it('Индикатор автосохранения будет показан при вызове метода show', () => {
    service.show();
    expect(service.isVisible).toBeTruthy();
  });

  it('Индикатор будет скрыт при вызове метода hide', () => {
    service.show();
    service.hide();
    expect(service.isVisible).toBeFalsy();
  });

  it('Состояние индикатора будет сброшено до изначального при вызове метода reset', () => {
    service.progress();
    service.reset();
    expect(service.values.isLoading).toBeFalsy();
    expect(service.values.isError).toBeFalsy();
    expect(service.values.isSuccess).toBeFalsy();

    expect(service.values.errorMsg).toBe(
      AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE.message,
    );
  });

  it('Будет установлено состояние прогресса при вызове метода progress', () => {
    service.progress();
    expect(service.values.isLoading).toBeTruthy();
    expect(service.values.isError).toBeFalsy();
    expect(service.values.isSuccess).toBeFalsy();
  });

  it('Будет установлено состояние успеха при вызове метода success', () => {
    service.success();
    expect(service.values.isLoading).toBeFalsy();
    expect(service.values.isError).toBeFalsy();
    expect(service.values.isSuccess).toBeTruthy();
  });
});
