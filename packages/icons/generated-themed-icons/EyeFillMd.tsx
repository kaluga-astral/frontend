import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const EyeFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-12C6.5 4 2 8.8 2 12c0 3 4.6 8 10 8s10-5 10-8c0-3.2-4.5-8-10-8Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </SvgIcon>
);

export default EyeFillMd;
