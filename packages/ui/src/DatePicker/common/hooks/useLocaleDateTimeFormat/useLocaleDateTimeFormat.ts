import { useContext, useRef } from 'react';

import { DatePickerContext } from '../../../../DatePickerProvider';

type UseLocaleDateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const useLocaleDateTimeFormat = (
  options: UseLocaleDateTimeFormatOptions,
) => {
  const { locale } = useContext(DatePickerContext);
  const { current } = useRef(Intl.DateTimeFormat(locale, options).format);

  return current;
};
