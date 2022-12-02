import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SendOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M7 19.5c0 1.3 1.6 2 2.6 1l12-12.8c1-1 .2-2.7-1.2-2.7H3.5c-1.3 0-2 1.6-1 2.6L7 12.4v7Zm2-1.3v-6.6L3.9 6.2c.3.3 0 .8-.4.8h16L9 18.2Z" />
    <path d="m8.4 12.9 4-2a1 1 0 0 0 0-1.8 1 1 0 0 0-.8 0l-4 2a1 1 0 0 0 0 1.8 1 1 0 0 0 .8 0Z" />
  </SvgIcon>
);

export default SendOutlineMd;
