import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const TwitterFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M20.5 5.8c1-.5 1.6-1.4 2-2.5-1 .6-1.8 1-2.8 1.1A4.2 4.2 0 0 0 16.5 3c-2.3 0-4.3 2-4.3 4.5l.1 1a12 12 0 0 1-8.8-4.7A4.7 4.7 0 0 0 4.8 10c-.7 0-1.4-.2-2-.6 0 2.3 1.5 4.1 3.5 4.5a4 4 0 0 1-2 .1 4.3 4.3 0 0 0 4 3.2A8.4 8.4 0 0 1 2 19c2 1.2 4.2 2 6.6 2 8 0 12.3-7 12.3-13v-.5A9 9 0 0 0 23 5c-.8.4-1.6.6-2.5.7Z"
      fill="#1da1f2"
    />
  </SvgIcon>
);

export default TwitterFillMd;
