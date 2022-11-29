import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const AnalyticOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M21 17H5a1 1 0 0 1-1-1V6a1 1 0 1 0-2 0v10a3 3 0 0 0 3 3h16a1 1 0 0 0 0-2Zm-3-8v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h3Z" />
    <path d="M13.3 13.7a1 1 0 0 0 1.4 0l4-4a1 1 0 1 0-1.4-1.4L14 11.6l-2.3-2.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 1.4 1.4l3.3-3.3 2.3 2.3Z" />
  </SvgIcon>
);

export default AnalyticOutlineMd;
