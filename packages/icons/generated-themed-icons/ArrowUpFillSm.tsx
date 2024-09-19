import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowUpFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m8 7 2.5 3h-5L8 7z" />
  </SvgIcon>
);

export default ArrowUpFillSm;
