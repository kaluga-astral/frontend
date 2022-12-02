import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const YoutubeFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M22.8 6.4c-.3-1-1-1.7-2-2-1.8-.5-8.8-.5-8.8-.5s-7 0-8.8.5c-1 .2-1.7 1-2 2C.7 8 .7 11.8.7 11.8s0 3.7.5 5.4c.3 1 1 1.7 2 2 1.8.5 8.8.5 8.8.5s7 0 8.8-.5c1-.3 1.7-1 2-2 .4-1.7.4-5.4.4-5.4s0-3.7-.4-5.4Zm-13 8.8V8.4l5.8 3.4-5.9 3.4Z"
      fill="red"
    />
  </SvgIcon>
);

export default YoutubeFillMd;
