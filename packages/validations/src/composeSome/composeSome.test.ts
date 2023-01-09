import { composeSome } from './composeSome';

describe('composeSome', () => {
  it('Valid one of rules return ok', () => {
    const validate = composeSome(
      () => 'error1',
      () => 'error2',
      () => undefined,
    );

    expect(validate(null)).toBe(undefined);
  });

  it('Valid all rules return error', () => {
    const validate = composeSome(
      () => 'error1',
      () => 'error2',
    );

    expect(validate(null)).toBe('error1');
  });

  it('Valid all rules return ok', () => {
    const validate = composeSome(
      () => undefined,
      () => undefined,
    );

    expect(validate(null)).toBe(undefined);
  });
});
