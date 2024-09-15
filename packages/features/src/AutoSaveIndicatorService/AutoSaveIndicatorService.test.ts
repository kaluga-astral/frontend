import { describe, expect, it } from 'vitest';

import { AutoSaveIndicatorService } from './AutoSaveIndicatorService';
import { AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE } from './constants';

describe('AutoSaveIndicatorService', () => {
  let service: AutoSaveIndicatorService;

  const prepareError = (message: string) => {
    return {
      message,
      onRetry: () => {},
    };
  };

  beforeEach(() => {
    service = new AutoSaveIndicatorService();
  });

  describe('Инициализация сервиса', () => {
    it('Ошибка отсутствует', () => {
      expect(service.values.isError).toBeFalsy();
    });

    it('Состояние загрузки отрицательно', () => {
      expect(service.values.isLoading).toBeFalsy();
    });

    it('Состояние успеха отрицательно', () => {
      expect(service.values.isSuccess).toBeFalsy();
    });

    it('Индикатор автосохранения невидим', () => {
      expect(service.isVisible).toBeFalsy();
    });

    it('Сообщение об ошибке эквивалентно изначальному', () => {
      expect(service.values.errorMsg).toBe(
        AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE.message,
      );
    });
  });

  describe('Вызов метода reset', () => {
    it('Состояние ошибки сброшено до изначального состояния', () => {
      const error = prepareError('Test Error');

      service.setError(error);
      service.reset();
      expect(service.values.isError).toBeFalsy();
    });

    it('Состояние загрузки сброшено до изначального состояния', () => {
      service.progress();
      service.reset();
      expect(service.values.isLoading).toBeFalsy();
    });

    it('Состояние успеха сброшено до изначального состояния', () => {
      expect(service.values.isSuccess).toBeFalsy();
    });

    it('Индикатор автосохранения невидим', () => {
      expect(service.isVisible).toBeFalsy();
    });

    it('Сообщение об ошибке эквивалентно изначальному', () => {
      const error = prepareError('Test Error');

      service.setError(error);
      service.reset();

      expect(service.values.errorMsg).toBe(
        AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE.message,
      );
    });
  });

  describe('Вызов метода setError', () => {
    const errorText = 'Произошла ошибка при выполнении запроса';

    const error = prepareError(errorText);

    it('Состояние ошибки установлено', () => {
      service.show();
      service.setError(error);
      expect(service.values.isError).toBeTruthy();
    });

    it('Текст ошибки установлен', () => {
      service.show();
      service.setError(error);
      expect(service.values.errorMsg).toBe(errorText);
    });
  });

  describe('Видимость индикатора автосохранения', () => {
    it('Отображается при вызове метода show', () => {
      service.show();
      expect(service.isVisible).toBeTruthy();
    });

    it('Скрыт при вызове метода hide', () => {
      service.show();
      service.hide();
      expect(service.isVisible).toBeFalsy();
    });
  });

  it('Состояние прогресса устанавливается при вызове метода progress', () => {
    service.progress();
    expect(service.values.isLoading).toBeTruthy();
  });

  it('Состояние успешного автосохранения устанавливается при вызове метода success', () => {
    service.success();
    expect(service.values.isSuccess).toBeTruthy();
  });
});
