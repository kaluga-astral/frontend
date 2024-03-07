import { type PropsWithChildren } from 'react';

import { type MinMaxDate } from '../../types';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../constants';
import { MinMaxDateContext } from '../MinMaxDateContext';

export const MinMaxDateContextProvider = ({
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  children,
}: PropsWithChildren<Partial<MinMaxDate>>) => (
  <MinMaxDateContext.Provider value={{ maxDate, minDate }}>
    {children}
  </MinMaxDateContext.Provider>
);
