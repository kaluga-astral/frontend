import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DownloadVOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      fillRule="evenodd"
      d="M17.2 12.2a1 1 0 0 0-1.4-1.4L13 13.6V4a1 1 0 1 0-2 0v9.6l-2.8-2.8a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4 0l4.5-4.5ZM4 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H4Z"
    />
  </SvgIcon>
);

export default DownloadVOutlineMd;
