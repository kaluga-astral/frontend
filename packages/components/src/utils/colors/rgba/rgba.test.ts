import { expect } from 'vitest';

import { rgba } from './rgba';

describe('rgba', () => {
  it('Возвращает цвет в rgba и применяет указанную величину альфа-канала', () => {
    const result = rgba('#072D57', 0.15);

    expect(result).toBe('rgba(7, 45, 87, 0.15)');
  });
});
