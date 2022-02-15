import React from 'react';
import { SvgIcon } from '@mui/material';

export const DefaultIcon: React.VFC = ({ ...props }) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="7" fill="#DDE2E8" />
    <circle cx="12" cy="12" r="5" />
  </SvgIcon>
);

export const CheckedCircleIcon: React.VFC = ({ ...props }) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="2" fill="#FAFBFC" />
    <path
      d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z"
      fill="#E64343"
    />
  </SvgIcon>
);
