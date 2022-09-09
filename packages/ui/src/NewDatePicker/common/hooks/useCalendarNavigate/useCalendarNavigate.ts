import { useState } from 'react';

type UseCalendarNavigateProps = {
  date: Date;
  addCb: (date: Date, count: number) => Date;
};

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

  return {
    baseDate,
    handlePrevClick,
    handleNextClick,
  };
};
