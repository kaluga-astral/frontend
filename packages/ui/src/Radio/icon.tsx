import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const DefaultIcon: React.FC<SvgIconProps> = ({ ...props }) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="7" fill="#DDE2E8" />
    <circle cx="12" cy="12" r="5" fill="white" />
  </SvgIcon>
);

export const CheckedCircleIcon: React.FC<SvgIconProps> = ({ ...props }) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="7" fill="#2165CC" />
    <circle cx="12" cy="12" r="2" fill="#FAFBFC" />
    <path
      d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z"
      fill="#E64343"
    />
  </SvgIcon>
);

export const UncheckedCircleIcon: React.FC<SvgIconProps> = ({ ...props }) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="7" fill="#DDE2E8" />
    <circle cx="12" cy="12" r="5" fill="#F0F4F7" />
  </SvgIcon>
);
