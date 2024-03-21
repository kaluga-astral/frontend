import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowUpOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12.7 4.3a1 1 0 0 0-1.4 0l-6.4 6.4A1 1 0 1 0 6.3 12L12 6.4l5.7 5.7a1 1 0 0 0 1.4-1.4l-6.4-6.4ZM11 19a1 1 0 1 0 2 0h-2Zm0-14v14h2V5h-2Z" />
  </SvgIcon>
);

export default ArrowUpOutlineMd;
