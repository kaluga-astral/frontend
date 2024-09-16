import { describe, expect, it } from 'vitest';

import { AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE } from '../constants';

import { AutoSaveIndicatorService } from './AutoSaveIndicatorService';

describe('AutoSaveIndicatorService', () => {
  let sut: AutoSaveIndicatorService;

  const prepareError = (message: string) => {
    return {
      message,
      onRetry: () => {},
    };
  };

  beforeEach(() => {
    sut = new AutoSaveIndicatorService();
  });

  describe('При инициализации сервиса:', () => {
    it('Ошибка отсутствует', () => {
      expect(sut.values.isError).toBeFalsy();
    });

    it('Состояние загрузки отрицательно', () => {
      expect(sut.values.isLoading).toBeFalsy();
    });

    it('Состояние успеха отрицательно', () => {
      expect(sut.values.isSuccess).toBeFalsy();
    });

    it('Индикатор автосохранения невидим', () => {
      expect(sut.isVisible).toBeFalsy();
    });

    it('Сообщение об ошибке эквивалентно изначальному', () => {
      expect(sut.values.errorMsg).toBe(
        AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE.message,
      );
    });
  });

  describe('Метод reset', () => {
    it('Состояние ошибки сбрасывается до изначального состояния при вызове метода', () => {
      const error = prepareError('Test Error');

      sut.setError(error);
      sut.reset();
      expect(sut.values.isError).toBeFalsy();
    });

    it('Состояние загрузки сбрасывается до изначального состояния при вызове метода', () => {
      sut.progress();
      sut.reset();
      expect(sut.values.isLoading).toBeFalsy();
    });

    it('Состояние успеха сбрасывается до изначального состояния при вызове метода', () => {
      expect(sut.values.isSuccess).toBeFalsy();
    });

    it('Индикатор автосохранения скрывается при вызове метода', () => {
      expect(sut.isVisible).toBeFalsy();
    });

    it('Сообщение об ошибке эквивалентно изначальному при вызове метода', () => {
      const error = prepareError('Test Error');

      sut.setError(error);
      sut.reset();

      expect(sut.values.errorMsg).toBe(
        AUTO_SAVE_INDICATOR_DEFAULT_ERROR_STATE.message,
      );
    });
  });

  describe('Метод setError', () => {
    const errorText = 'Произошла ошибка при выполнении запроса';

    const error = prepareError(errorText);

    it('Состояние ошибки устанавливается при вызове метода', () => {
      sut.show();
      sut.setError(error);
      expect(sut.values.isError).toBeTruthy();
    });

    it('Текст ошибки устанавливается при вызове метода', () => {
      sut.show();
      sut.setError(error);
      expect(sut.values.errorMsg).toBe(errorText);
    });
  });

  describe('Видимость индикатора автосохранения', () => {
    it('Отображается при вызове метода show', () => {
      sut.show();
      expect(sut.isVisible).toBeTruthy();
    });

    it('Скрывается при вызове метода hide', () => {
      sut.show();
      sut.hide();
      expect(sut.isVisible).toBeFalsy();
    });
  });

  it('Состояние прогресса устанавливается при вызове метода progress', () => {
    sut.progress();
    expect(sut.values.isLoading).toBeTruthy();
  });

  it('Состояние успешного автосохранения устанавливается при вызове метода success', () => {
    sut.success();
    expect(sut.values.isSuccess).toBeTruthy();
  });
});
