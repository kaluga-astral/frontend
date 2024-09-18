import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowUpOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M4.491 6.551a.75.75 0 0 1-.042-1.06l3-3.25a.75.75 0 0 1 1.102 0l3 3.25A.75.75 0 1 1 10.45 6.51L8.75 4.669v8.581a.75.75 0 0 1-1.5 0V4.668l-1.699 1.84a.75.75 0 0 1-1.06.043z" />
  </SvgIcon>
);

export default ArrowUpOutlineSm;
