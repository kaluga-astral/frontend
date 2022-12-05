import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ClockwiseOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M10.6 4 9.5 2.9a1 1 0 0 1 1.4-1.4l2.8 2.8c.4.4.4 1 0 1.4L11 8.5a1 1 0 0 1-1.4-1.4l1-1.1H8a3 3 0 0 0-3 3v3a1 1 0 1 1-2 0V9a5 5 0 0 1 5-5h2.6ZM9 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11Zm2 1v8h8v-8h-8Z" />
  </SvgIcon>
);

export default ClockwiseOutlineMd;
