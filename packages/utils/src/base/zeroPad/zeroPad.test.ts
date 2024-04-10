import { expect } from 'vitest';

import { zeroPad } from './zeroPad';

describe('zeroPad', () => {
  it('К числу вначале добавляются нули до заданной длины', () => {
    const result = zeroPad(1, 3);

    expect(result).toBe('001');
  });

  it('К числу не добавятся нули, если количество символов числа равно заданной длине', () => {
    const result = zeroPad(111, 3);

    expect(result).toBe('111');
  });
});
