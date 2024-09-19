import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UpOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M11.31 9.043a1 1 0 0 1 1.414 0l4.593 4.593a.99.99 0 0 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.593-4.593z" />
  </SvgIcon>
);

export default UpOutlineMd;
