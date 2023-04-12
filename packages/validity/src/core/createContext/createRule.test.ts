import { expect } from 'vitest';

import { createContext } from './createContext';

describe('createContext', () => {
  it('Не создает новый контекст, если был старый', () => {
    const ctx = { values: undefined, isOptional: true };

    const resultCtx = createContext(ctx, '');

    // ссылка на объект не меняется
    expect(resultCtx).toBe(ctx);
  });

  it('При создании контекста устанавливает isOptional в true', () => {
    const resultCtx = createContext(undefined, '');

    expect(resultCtx.isOptional).toBeTruthy();
  });

  it('При создании контекста в values устанавливается value', () => {
    const resultCtx = createContext(undefined, 'value');

    expect(resultCtx.values).toBe('value');
  });
});
