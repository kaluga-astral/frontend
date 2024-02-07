import { useMediaQuery, useTheme } from '@mui/material';

type UseViewportTypeReturned = {
  isMobile: boolean;
};

export const useViewportType = (): UseViewportTypeReturned => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return { isMobile };
};
