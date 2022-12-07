import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const TreeOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M17.8 11.2c0 1-.6 2-1.6 2.3v1c0 1.8-1.5 3.3-3.4 3.3H11a2.5 2.5 0 0 1-4.8-.8c0-1 .6-2 1.6-2.3V9.3A2.6 2.6 0 0 1 6.2 7c0-1.4 1-2.5 2.5-2.5 1.4 0 2.5 1 2.5 2.5 0 1-.7 2-1.8 2.3v5.4c.8.2 1.3.7 1.6 1.5h1.8c1 0 1.7-.8 1.7-1.7v-1a2.5 2.5 0 0 1 .8-4.8c1.4 0 2.5 1 2.5 2.5Zm-9.1-5c-.4 0-.9.3-.9.8s.4.8.9.8.8-.3.8-.8-.3-.8-.8-.8Zm6.6 5.8c.5 0 .9-.3.9-.8s-.4-.9-.9-.9-.8.4-.8.9.3.8.8.8Zm-6.6 5.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.9.3-.9.8.4.8.9.8Z" />
  </SvgIcon>
);

export default TreeOutlineMd;
