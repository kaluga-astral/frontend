import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowLOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M6.551 11.509a.75.75 0 0 1-1.06.042l-3.25-3a.75.75 0 0 1 0-1.102l3.25-3A.75.75 0 0 1 6.51 5.55L4.669 7.25h8.581a.75.75 0 0 1 0 1.5H4.668l1.84 1.699a.75.75 0 0 1 .043 1.06z" />
  </SvgIcon>
);

export default ArrowLOutlineSm;
