import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DoubleCheckOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M15 5c.3.2.3.7 0 1l-5 5.5a.8.8 0 0 1-1 0l-1.2-1.1 1-1 .7.5L13.9 5c.3-.3.8-.3 1.1 0Zm-4 1a.8.8 0 0 0-1-1l-4.5 5-2-2a.7.7 0 1 0-1 1L5 11.5a.7.7 0 0 0 1 0L11 6Z" />
  </SvgIcon>
);

export default DoubleCheckOutlineSm;
