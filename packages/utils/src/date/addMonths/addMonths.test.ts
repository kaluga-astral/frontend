import { expect } from 'vitest';

import { addMonths } from './addMonths';

describe('addMonths', () => {
  it('К дате прибавляется заданное количество месяцев', () => {
    const result = addMonths(new Date('01.01.2024'), 3);

    expect(result).toStrictEqual(new Date('04.01.2024'));
  });
});
