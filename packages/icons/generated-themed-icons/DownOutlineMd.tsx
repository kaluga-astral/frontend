import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DownOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12.7 15a1 1 0 0 1-1.4 0l-4.6-4.6A1 1 0 0 1 8.1 9l4 4 3.8-4a1 1 0 0 1 1.4 1.4L12.7 15Z" />
  </SvgIcon>
);

export default DownOutlineMd;
