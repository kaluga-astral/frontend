import type { TypographyProps } from '../Typography';
import { Typography } from '../Typography';
import type { PaperProps } from '../Paper';
import { Paper } from '../Paper';
import { styled } from '../styles';

import type { TabsProps } from './Tabs';
import { Tabs } from './Tabs';

export const TabsShowcaseTypography1 = styled(Typography)<TypographyProps>`
  width: 772px;
  margin: 60px 0 16px;
`;

export const TabsShowcaseTypography2 = styled(Typography)<TypographyProps>`
  width: 772px;
  margin: 0 0 60px;
`;

export const TabsShowcaseTabs1 = styled(Tabs)<TabsProps>`
  margin: 0 32px;
`;

export const TabsShowcasePaper = styled(Paper)<PaperProps>`
  width: 468px;
  margin: 60px 0 0;
`;

export const TabsShowcaseTabs2 = styled(Tabs)<TabsProps>`
  margin: 0 0 16px;
`;
