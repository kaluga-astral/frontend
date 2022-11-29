import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const NextOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M16 11a1 1 0 0 1 0 1.4L11.4 17a1 1 0 0 1-1.4-1.4l3.9-3.9L10 7.8a1 1 0 0 1 1.4-1.4L16 11Z" />
  </SvgIcon>
);

export default NextOutlineMd;
