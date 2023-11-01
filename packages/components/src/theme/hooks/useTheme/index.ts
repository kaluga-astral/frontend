import { useTheme as useEmotionTheme } from '@emotion/react';

import { Theme } from '../../types';

// any необходим для коннекта темы
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): Theme => useEmotionTheme() as any;
