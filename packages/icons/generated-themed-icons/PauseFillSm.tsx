import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const PauseFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM6 5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z" />
  </SvgIcon>
);

export default PauseFillSm;
