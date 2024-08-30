import { describe, expect, it } from 'vitest';

import { makeEdgeDates } from './makeEdgeDates';

describe('makeEdgeDates', () => {
  describe('При isMondayFirst == true', () => {
    it('StartDate равен значению первого понедельника в календаре для месяца базовой даты', () => {
      const { startDate } = makeEdgeDates(
        new Date('2024-08-01T00:00:00.000Z'),
        true,
      );

      expect(startDate).toStrictEqual(new Date('2024-07-29T00:00:00.000Z'));
    });

    it('EndDate равен значению последнего воскресенья в календаре для месяца базовой даты', () => {
      const { endDate } = makeEdgeDates(
        new Date('2024-08-01T00:00:00.000Z'),
        true,
      );

      expect(endDate).toStrictEqual(new Date('2024-09-08T00:00:00.000Z'));
    });
  });

  describe('При isMondayFirst == false', () => {
    it('StartDate равен значению первого воскресенья в календаре для месяца базовой даты', () => {
      const { startDate } = makeEdgeDates(
        new Date('2024-08-01T00:00:00.000Z'),
        false,
      );

      expect(startDate).toStrictEqual(new Date('2024-07-28T00:00:00.000Z'));
    });

    it('EndDate равен значению последнего понедельника в календаре для месяца базовой даты', () => {
      const { endDate } = makeEdgeDates(
        new Date('2024-08-01T00:00:00.000Z'),
        false,
      );

      expect(endDate).toStrictEqual(new Date('2024-09-07T00:00:00.000Z'));
    });
  });
});
