import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BellFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12.1 21a2 2 0 0 0 1.9-1.2l.1-.8h-4a2 2 0 0 0 1.2 1.8l.8.2ZM7 9v1c0 1.1-.3 2.9-.7 3.9l-1 3.2c-.2.5 0 1 .6 1h12.2c.5 0 .8-.5.7-1l-1.1-3.2c-.4-1-.6-2.8-.6-3.9V9a5 5 0 0 0-4-4.9 1 1 0 0 0-.7-1 1 1 0 0 0-1.3.5L11 4v.1a5 5 0 0 0-4 5Z" />
  </SvgIcon>
);

export default BellFillMd;
