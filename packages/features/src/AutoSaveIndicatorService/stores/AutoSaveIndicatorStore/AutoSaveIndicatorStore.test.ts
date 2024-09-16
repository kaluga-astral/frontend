import { describe, expect, it } from 'vitest';
import { when } from 'mobx';

import { AutoSaveIndicatorStore } from './AutoSaveIndicatorStore';

describe('AutoSaveIndicatorStore', () => {
  it('Индикатор автосохранения отображается при вызове метода show', async () => {
    const sut = new AutoSaveIndicatorStore();

    sut.show();
    await when(() => sut.isVisible);
    expect(sut.isVisible).toBeTruthy();
  });

  it('Сообщение об ошибке установлено при вызове метода setError', async () => {
    const sut = new AutoSaveIndicatorStore();
    const errorMessage = 'Test Error';

    sut.setError({ message: errorMessage, onRetry: () => {} });
    await when(() => sut.values.errorMsg === errorMessage);
    expect(sut.values.errorMsg).toBe(errorMessage);
  });
});
