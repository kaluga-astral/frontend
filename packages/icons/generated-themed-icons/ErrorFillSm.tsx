import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ErrorFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m8.5 2.7.4.2 4.2 4.2a1.3 1.3 0 0 1 0 1.8l-4.2 4.2a1.3 1.3 0 0 1-1.8 0L2.9 8.9a1.3 1.3 0 0 1 0-1.8l4.2-4.2a1.3 1.3 0 0 1 1.4-.2ZM7.5 9a.7.7 0 0 0 1.2-.4V5.3a.7.7 0 0 0-1.4 0v3.4l.2.4Zm0 2a.7.7 0 1 0 1-.9.7.7 0 0 0-1 1Z" />
  </SvgIcon>
);

export default ErrorFillSm;
