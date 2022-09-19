import { useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { Case } from '../Case';

import { ExampleTemplateWrapper } from './styles';
type ExampleTemplateProps = {
  children?: ReactNode;
};

export const ExampleTemplate = ({ children }: ExampleTemplateProps) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ExampleTemplateWrapper matches={matches}>
      {children}
    </ExampleTemplateWrapper>
  );
};

ExampleTemplate.Case = Case;
