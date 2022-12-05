import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const FacebookFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      d="M14.3 23.5H9.4V12H7V8h2.4V5.7c0-3.3 1.4-5.2 5.3-5.2H18v4h-2c-1.6 0-1.7.5-1.7 1.6v2H18l-.4 3.9h-3.3v11.5Z"
      fill="#375496"
    />
  </SvgIcon>
);

export default FacebookFillMd;
