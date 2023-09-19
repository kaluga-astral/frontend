import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RouteOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0 8.5.8a2.7 2.7 0 0 1 0 5.4l-9 .6a2.7 2.7 0 0 0 0 5.4l8.5.8m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
  </SvgIcon>
);

export default RouteOutlineMd;
