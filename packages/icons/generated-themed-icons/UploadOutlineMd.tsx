import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const UploadOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M11.3 13.3a1 1 0 0 1 1.4 0l2.8 2.8a1 1 0 0 1-1.4 1.4l-1-1V21a1 1 0 1 1-2 0v-4.6l-1.2 1.1a1 1 0 1 1-1.4-1.4l2.8-2.8ZM12 2a7 7 0 0 1 7 6.2 5.5 5.5 0 0 1 0 10.6c-.5.1-1-.3-1-1 0-.5.4-.9.8-1a3.5 3.5 0 0 0 1.7-5.2 3.5 3.5 0 0 0-3.6-1.5 5 5 0 1 0-9.8 0 3.5 3.5 0 0 0-3.5 5.4c.4.5 1 1 1.6 1.3.5.1.8.5.8 1 0 .7-.5 1.1-1 1A5.5 5.5 0 0 1 5 8.2 7 7 0 0 1 12 2Z" />
  </SvgIcon>
);

export default UploadOutlineMd;
