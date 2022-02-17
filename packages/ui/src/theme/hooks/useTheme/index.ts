import { useTheme as useEmotionTheme } from '@emotion/react';
import { Theme } from '@mui/material';

export const useTheme = (): Theme => useEmotionTheme() as any;
