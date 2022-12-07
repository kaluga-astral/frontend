import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ArrowLOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M4.3 11.3a1 1 0 0 0 0 1.4l6.4 6.4a1 1 0 0 0 1.4-1.4L6.4 12l5.7-5.7A1 1 0 0 0 10.7 5l-6.4 6.4ZM19 13a1 1 0 1 0 0-2v2ZM5 13h14v-2H5v2Z" />
  </SvgIcon>
);

export default ArrowLOutlineMd;
