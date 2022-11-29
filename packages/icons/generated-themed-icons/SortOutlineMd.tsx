import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SortOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M7 13h10l1-2H6l1 2ZM4 6c-.6 0-.8.4-.6.9L4 8h16l.6-1.1c.2-.5 0-.9-.6-.9H4Zm6.8 11.6a.9.9 0 0 0 .7.4h1c.3 0 .6-.2.7-.4L14 16h-4l.8 1.6Z" />
  </SvgIcon>
);

export default SortOutlineMd;
