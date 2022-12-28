import { ReactNode, useMemo } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '../../Typography';

import { CaseContentWrapper, CaseWrapper } from './styles';

type CaseProps = {
  title: string;
  descriptionList?: string[];
  children: ReactNode;
  fullWidth?: boolean;
};

export const Case = (props: CaseProps) => {
  const { children, descriptionList = [], fullWidth = false, title } = props;
  const theme = useTheme();
  const isFullWidth = useMediaQuery(theme.breakpoints.down('sm')) || fullWidth;
  const subtitles = useMemo(() => {
    return descriptionList?.map((text, index) => (
      <Typography key={index} paragraph>
        {text}
      </Typography>
    ));
  }, [descriptionList]);

  return (
    <CaseWrapper fullWidth={isFullWidth}>
      <Typography variant="h5" paragraph>
        {title}
      </Typography>
      {subtitles}
      <CaseContentWrapper>{children}</CaseContentWrapper>
    </CaseWrapper>
  );
};
