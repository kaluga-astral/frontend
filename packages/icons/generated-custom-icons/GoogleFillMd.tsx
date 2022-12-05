import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const GoogleFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="m6.4 14-.7 2.7H3.2a10 10 0 0 1 0-9.3l2.2.4 1 2.3a6 6 0 0 0 0 4Z"
      fill="#FBBB00"
    />
    <path
      d="M21.8 10.1a10 10 0 0 1-3.5 9.7l-2.9-.1L15 17a6 6 0 0 0 2.6-3h-5.4v-4h9.6Z"
      fill="#518EF8"
    />
    <path
      d="M18.3 19.8a10 10 0 0 1-15.1-3L6.4 14a6 6 0 0 0 8.6 3l3.3 2.7Z"
      fill="#28B446"
    />
    <path
      d="M18.4 4.3 15 7a6 6 0 0 0-8.7 3L3.2 7.4a10 10 0 0 1 15.3-3.1Z"
      fill="#F14336"
    />
  </SvgIcon>
);

export default GoogleFillMd;
