import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PreviousOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8 11a1 1 0 0 0 0 1.4l4.6 4.6a1 1 0 0 0 1.4-1.4l-3.9-3.9L14 7.8a1 1 0 0 0-1.4-1.4L8 11Z" />
  </SvgIcon>
);

export default PreviousOutlineMd;
