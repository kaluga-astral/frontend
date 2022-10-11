import { useContext, useEffect, useState } from 'react';

import { YearPicker } from '../YearPicker';
import { MonthPicker } from '../MonthPicker';
import { DayPicker, MondayFirst } from '../DayPicker';
import { PickerProps } from '../types';
import { ConfigContext } from '../../ConfigProvider';

enum States {
  days,
  months,
  years,
}

type YearMonthDayPickerProps = PickerProps & MondayFirst;

export const YearMonthDayPicker = ({
  onChange,
  date: initialDate,
  selectedDate,
  isMondayFirst,
}: YearMonthDayPickerProps) => {
  const [currentState, setState] = useState(States.days);
  const [date, setDate] = useState(initialDate);

  const handleYearChange = (receivedDate: Date) => {
    setDate(receivedDate);
    setState(States.months);
  };

  const handleMonthChange = (receivedDate: Date) => {
    setDate(receivedDate);
    setState(States.days);
  };

  const handleMonthHeadBtnClick = () => setState(States.years);

  const handleDaysHeadBtnClick = () => setState(States.months);

  const { toYearPick, toMonthPick } =
    useContext(ConfigContext).datePickerLanguageMap;

  useEffect(() => {
    setDate(initialDate);
  }, [initialDate]);

  return (
    <>
      {currentState === States.years && (
        <YearPicker
          date={date}
          selectedDate={selectedDate}
          onChange={handleYearChange}
        />
      )}
      {currentState === States.months && (
        <MonthPicker
          date={date}
          selectedDate={selectedDate}
          onChange={handleMonthChange}
          onHeadBtnClick={handleMonthHeadBtnClick}
          headBtnTitle={toYearPick.single}
        />
      )}
      {currentState === States.days && (
        <DayPicker
          date={date}
          isMondayFirst={isMondayFirst}
          selectedDate={selectedDate}
          onHeadBtnClick={handleDaysHeadBtnClick}
          headBtnTitle={toMonthPick.single}
          onChange={onChange}
        />
      )}
    </>
  );
};
