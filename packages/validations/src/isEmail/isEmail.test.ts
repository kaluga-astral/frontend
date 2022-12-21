import {
  DEFAULT_ERROR_MESSAGE,
  EMAIL_MAX_LENGTH,
  INVALID_LENGTH_ERROR_MESSAGE,
  isEmail,
} from './isEmail';

const getLongEmail = () => `${'a'.repeat(EMAIL_MAX_LENGTH)}@test.com`;

describe('isEmail', () => {
  it.each<unknown>([
    'a',
    0,
    1,
    true,
    ['v'],
    { a: 1 },
    [undefined],
    undefined,
    NaN,
    '@mail.ru',
    'mail.ru',
    'test@.ru',
    'test.ru@',
  ])('Invalid for: %s', (value) => {
    expect(isEmail()(value)).toBe(DEFAULT_ERROR_MESSAGE);
  });

  it.each<unknown>([
    'test@test.ru',
    'test@test.com',
    'test-t@test.ru',
    'test.t@test.ru',
    'test_t@test.ru',
  ])('Valid for: %s', (value) => {
    expect(isEmail()(value)).toBe(undefined);
  });

  it('Validate default invalid length message', () => {
    expect(isEmail()(getLongEmail())).toBe(INVALID_LENGTH_ERROR_MESSAGE);
  });

  it('Validate custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isEmail({ message: customMessage })('test@')).toBe(customMessage);
  });

  it('Validate custom invalid length message', () => {
    const customMessage = 'CustomMessage';

    expect(
      isEmail({ invalidLengthMessage: customMessage })(getLongEmail()),
    ).toBe(customMessage);
  });
});
