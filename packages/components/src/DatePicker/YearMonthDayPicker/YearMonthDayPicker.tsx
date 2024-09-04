import { useContext, useEffect, useRef, useState } from 'react';

import { YearPicker } from '../YearPicker';
import { MonthPicker } from '../MonthPicker';
import { DayPicker, type MondayFirst } from '../DayPicker';
import { type PickerProps } from '../types';
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
  rangeDate,
  selectedDate,
  isMondayFirst,
  hoveredDayDate,
  onDayHover,
}: YearMonthDayPickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentState, setState] = useState(States.days);
  const [date, setDate] = useState(initialDate);

  // т.к. смена пикера происходит при клике на кнопку внутри одной из вариаций,
  // фокус находился внутри на одной из кнопок, но после смены пикера,
  // браузер скидывает его на рандомный тег, который находится вне пикера,
  // что приводит к срабатыванию события потери фокуса,
  // и, следовательно, закрытию пикера.
  // для решения проблемы, вручную фокусируемся на враппере
  const focusRef = () => ref.current?.focus();

  const handleYearChange = (receivedDate: Date) => {
    focusRef();
    setDate(receivedDate);
    setState(States.months);
  };

  const handleMonthChange = (receivedDate: Date) => {
    focusRef();
    setDate(receivedDate);
    setState(States.days);
  };

  const handleMonthHeadBtnClick = () => {
    focusRef();
    setState(States.years);
  };

  const handleDaysHeadBtnClick = () => {
    focusRef();
    setState(States.months);
  };

  const { toYearPick, toMonthPick } =
    useContext(ConfigContext).datePickerLanguageMap;

  useEffect(() => {
    setDate(initialDate);
  }, [initialDate]);

  return (
    <div tabIndex={-1} ref={ref}>
      {currentState === States.years && (
        <YearPicker
          date={date}
          selectedDate={selectedDate}
          onChange={handleYearChange}
          rangeDate={rangeDate}
        />
      )}
      {currentState === States.months && (
        <MonthPicker
          date={date}
          selectedDate={selectedDate}
          onChange={handleMonthChange}
          onHeadBtnClick={handleMonthHeadBtnClick}
          headBtnTitle={toYearPick.single}
          rangeDate={rangeDate}
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
          rangeDate={rangeDate}
          hoveredDayDate={hoveredDayDate}
          onDayHover={onDayHover}
        />
      )}
    </div>
  );
};
