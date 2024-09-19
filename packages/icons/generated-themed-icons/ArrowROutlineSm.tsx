import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowROutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M9.449 4.491a.75.75 0 0 1 1.06-.042l3.25 3a.75.75 0 0 1 0 1.102l-3.25 3A.75.75 0 1 1 9.49 10.45l1.84-1.699H2.75a.75.75 0 1 1 0-1.5h8.582l-1.84-1.699a.75.75 0 0 1-.043-1.06z" />
  </SvgIcon>
);

export default ArrowROutlineSm;
