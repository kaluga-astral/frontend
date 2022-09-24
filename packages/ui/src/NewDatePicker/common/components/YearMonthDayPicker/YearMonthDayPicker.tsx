import { useEffect, useState } from 'react';

import { YearPicker } from '../YearPicker';
import { MonthPicker } from '../MonthPicker';
import { DayPicker } from '../DayPicker';
import { PickerProps } from '../../types/pickerProps';

enum States {
  days,
  months,
  years,
}

type YearMonthDayPickerProps = PickerProps;

export const YearMonthDayPicker = ({
  onChange,
  date: initialDate,
  selectedDate,
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
          headBtnTitle="К выбору года"
        />
      )}
      {currentState === States.days && (
        <DayPicker
          date={date}
          selectedDate={selectedDate}
          onHeadBtnClick={handleDaysHeadBtnClick}
          headBtnTitle="К выбору месяца"
          onChange={onChange}
        />
      )}
    </>
  );
};
