import { useTheme as useEmotionTheme } from '@emotion/react';

import { Theme } from '../../index';

export const useTheme = (): Theme => useEmotionTheme() as any;
