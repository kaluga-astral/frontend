import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CrossOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M4.5 3.5a.8.8 0 0 0-1 1L6.9 8l-3.4 3.5a.7.7 0 1 0 1 1L8 9.1l3.5 3.4a.7.7 0 1 0 1-1L9.1 8l3.4-3.5a.7.7 0 0 0-1-1L8 6.9 4.5 3.5Z" />
  </SvgIcon>
);

export default CrossOutlineSm;
