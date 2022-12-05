import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CrossSmOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M35.3 31.2a3 3 0 0 1 0 4.1 2.9 2.9 0 0 1-4 0L25 29.2l-6.2 6.1a2.9 2.9 0 0 1-4 0 2.9 2.9 0 0 1 0-4l6-6.2-6-6.2a3 3 0 0 1 0-4 2.9 2.9 0 0 1 4 0l6.2 6 6.1-6a3 3 0 0 1 4.1 0 2.9 2.9 0 0 1 0 4l-6.1 6.2 6.1 6.1Z" />
  </SvgIcon>
);

export default CrossSmOutlineSm;
