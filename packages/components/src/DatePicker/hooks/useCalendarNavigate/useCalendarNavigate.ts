import { useEffect, useState } from 'react';

type UseCalendarNavigateProps = {
  /**
   * опорная дата, относительно которой будет идти переключение
   */
  date: Date;
  /**
   * колбэк отвечающий за переключение опорной даты
   * @example addDays || addMonths || addYears
   */
  addCb: (date: Date, count: number) => Date;
};

/**
 * хук для навигации в календаре по опорной дате
 */
export const useCalendarNavigate = ({
  date,
  addCb,
}: UseCalendarNavigateProps) => {
  const [baseDate, setBaseDate] = useState(date);

  const handleNextClick = () => {
    setBaseDate(addCb(baseDate, 1));
  };

  const handlePrevClick = () => {
    setBaseDate(addCb(baseDate, -1));
  };

  useEffect(() => {
    setBaseDate(date);
  }, [date]);

  return {
    baseDate,
    handlePrevClick,
    handleNextClick,
  };
};
