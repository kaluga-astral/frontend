import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LinkOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m12.9 5.5-1 .9a1 1 0 0 0 0 1.4 1 1 0 0 0 1.5 0l1-1c1-.9 2.5-1 3.6-.2a2.5 2.5 0 0 1 .2 3.8l-3 2.8a2.6 2.6 0 0 1-3.6 0l-1.1-1L9 13.5l1.1 1a4.8 4.8 0 0 0 6.6 0l3-2.8a4.6 4.6 0 0 0-.4-6.8 4.9 4.9 0 0 0-6.4.5Z" />
    <path d="m11.1 19.5 1-.9a1 1 0 0 0 0-1.4 1 1 0 0 0-1.5 0l-1 1c-1 .9-2.5 1-3.6.2a2.5 2.5 0 0 1-.2-3.8l3-2.8a2.6 2.6 0 0 1 3.6 0l1.1 1 1.5-1.4-1.1-1a4.8 4.8 0 0 0-6.6 0l-3 2.8a4.6 4.6 0 0 0 .4 6.8 4.9 4.9 0 0 0 6.4-.5Z" />
  </SvgIcon>
);

export default LinkOutlineMd;
