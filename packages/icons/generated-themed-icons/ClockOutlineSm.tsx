import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ClockOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fill-rule="evenodd"
      d="M12.75 8a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0zM14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0zM8.625 5.5a.625.625 0 1 0-1.25 0v3c0 .209.104.404.278.52l1.5 1a.625.625 0 1 0 .694-1.04l-1.222-.814V5.5z"
    />
  </SvgIcon>
);

export default ClockOutlineSm;
