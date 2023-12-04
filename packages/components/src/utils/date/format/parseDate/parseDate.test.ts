import { DEFAULT_DATE_MASK } from '../../../../DatePicker/constants/defaultDateMask';

import { parseDate } from './parseDate';

describe('parseDate', () => {
  it('При некорректном значении "year" в date', () => {
    const date = '21.09.';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toBe(undefined);
  });

  it('При некорректном значении "month" в date', () => {
    const date = '21..2022';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toBe(undefined);
  });

  it('При некорректном значении "day" в date', () => {
    const date = '.09.2022';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toBe(undefined);
  });

  it('При пустом значении date', () => {
    const date = '';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toBe(undefined);
  });

  it('При пустом значении date с подчеркиваниями в MaskField', () => {
    const date = '__.__.____';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toBe(undefined);
  });

  it('При корректном значении date', () => {
    const date = '21.09.2022';
    const mask = DEFAULT_DATE_MASK;
    const separator = '.';

    const result = parseDate(date, mask, separator);

    expect(result).toStrictEqual(new Date('2022-09-21T00:00:00.000Z'));
  });
});
