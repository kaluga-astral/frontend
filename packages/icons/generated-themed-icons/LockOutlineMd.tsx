import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LockOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M16 11V9h-2V7a2 2 0 1 0-4 0v2H8v2H7v8h10v-8h-1Zm-2 0h-4V9h4v2ZM8 9V7a4 4 0 0 1 8 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1Zm0 0h2v2H8V9Zm6 0h2v2h-2V9Z" />
    <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </SvgIcon>
);

export default LockOutlineMd;
