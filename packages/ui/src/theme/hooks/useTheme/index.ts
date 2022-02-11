import { useTheme as useEmotionTheme } from '@emotion/react';

import { Theme } from '../../baseTheme';

export const useTheme = (): Theme => useEmotionTheme() as any;
