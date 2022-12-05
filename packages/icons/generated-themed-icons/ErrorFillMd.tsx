import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ErrorFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12.8 4c.2 0 .4.2.6.4l6.2 6.2a2 2 0 0 1 0 2.8l-6.2 6.2a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8l6.2-6.2a2 2 0 0 1 2.2-.4Zm-1.5 9.7A1 1 0 0 0 13 13V8a1 1 0 0 0-2 0v5c0 .3.1.5.3.7Zm0 3a1 1 0 1 0 1.4-1.4 1 1 0 0 0-1.4 1.4Z" />
  </SvgIcon>
);

export default ErrorFillMd;
