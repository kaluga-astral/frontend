import { expect } from 'vitest';

import { addYears } from './addYears';

describe('addYears', () => {
  it('К дате прибавляется заданное количество лет', () => {
    const result = addYears(new Date('01.01.2020'), 4);

    expect(result).toStrictEqual(new Date('01.01.2024'));
  });
});
