import { createContext } from 'react';

import { type MinMaxDate } from '../types';

import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from './constants';

/**
 * контекст позволяющий точечно вытаскивать значение минимальной и максимальной дат, без необходимости прокидывать их пропсами в каждый зависимый компонент, уменьшает количество повторяющихся частей
 */
export const MinMaxDateContext = createContext<MinMaxDate>({
  minDate: DEFAULT_MIN_DATE,
  maxDate: DEFAULT_MAX_DATE,
});
