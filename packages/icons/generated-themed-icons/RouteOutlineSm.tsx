import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RouteOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="m5 4 5.4.3a1.7 1.7 0 0 1 0 3.4l-4.9.6a1.7 1.7 0 0 0 0 3.4l5.5.3M5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </SvgIcon>
);

export default RouteOutlineSm;
