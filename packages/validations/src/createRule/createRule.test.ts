import { createRule } from './createRule';

describe('createRule', () => {
  it('Не модифицирует переданный rule', () => {
    const rule = createRule(() => () => 'Ошибка');

    expect(rule({})()).toBe('Ошибка');
  });
});
