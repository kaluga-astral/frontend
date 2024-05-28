import { expect } from 'vitest';

import { addDays } from './addDays';

describe('addDays', () => {
  it('К дате прибавляется заданное количество дней', () => {
    const result = addDays(new Date('01.01.2024'), 15);

    expect(result).toStrictEqual(new Date('01.16.2024'));
  });
});
