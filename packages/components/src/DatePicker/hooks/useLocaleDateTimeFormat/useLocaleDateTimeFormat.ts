import { useContext, useRef } from 'react';

import { ConfigContext } from '../../../ConfigProvider';

type UseLocaleDateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const useLocaleDateTimeFormat = (
  options: UseLocaleDateTimeFormatOptions,
) => {
  const { language } = useContext(ConfigContext);
  const { current } = useRef(Intl.DateTimeFormat(language, options).format);

  return current;
};
