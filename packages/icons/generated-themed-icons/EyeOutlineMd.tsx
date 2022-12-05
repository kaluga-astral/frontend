import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const EyeOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 18c-4.5 0-8-4.3-8-6 0-2 3.5-6 8-6 4.4 0 8 4 8 6 0 1.7-3.5 6-8 6Zm0-14C6.5 4 2 8.8 2 12c0 3 4.6 8 10 8s10-5 10-8c0-3.2-4.5-8-10-8" />
    <path d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  </SvgIcon>
);

export default EyeOutlineMd;
