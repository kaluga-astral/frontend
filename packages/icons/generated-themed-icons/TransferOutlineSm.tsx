import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const TransferOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M5.491 7.301A.75.75 0 0 0 6.51 6.2L4.669 4.5h8.581a.75.75 0 0 0 0-1.5H4.668l1.84-1.699A.75.75 0 1 0 5.492.2l-3.25 3a.75.75 0 0 0 0 1.102l3.25 3zM10.51 8.7A.75.75 0 1 0 9.49 9.8l1.84 1.699H2.75a.75.75 0 0 0 0 1.5h8.582l-1.84 1.699a.75.75 0 1 0 1.017 1.102l3.25-3a.75.75 0 0 0 0-1.102l-3.25-3z" />
  </SvgIcon>
);

export default TransferOutlineSm;
