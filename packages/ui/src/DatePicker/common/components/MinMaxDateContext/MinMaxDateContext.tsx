import { PropsWithChildren, createContext } from 'react';

import { MinMaxDate } from '../../types/minMaxDate';
import { buildIsoDate } from '../../utils/buildIsoDate';

const DEFAULT_MIN_DATE = buildIsoDate({ year: 1900 });

const DEFAULT_MAX_DATE = buildIsoDate({
  year: new Date().getUTCFullYear() + 100,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
});

export const MinMaxDateContext = createContext<MinMaxDate>({
  minDate: DEFAULT_MIN_DATE,
  maxDate: DEFAULT_MAX_DATE,
});

export const MinMaxDateContextProvider = ({
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  children,
}: PropsWithChildren<Partial<MinMaxDate>>) => (
  <MinMaxDateContext.Provider value={{ maxDate, minDate }}>
    {children}
  </MinMaxDateContext.Provider>
);
