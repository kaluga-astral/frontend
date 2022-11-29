import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const OpenLinkOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M15 4a1 1 0 1 0 0 2h1.6l-4.8 4.8a1 1 0 0 0 1.4 1.4L18 7.4V9a1 1 0 1 0 2 0V5c0-.6-.4-1-1-1h-4ZM7 5h5v2H7v10h10v-5h2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Z" />
  </SvgIcon>
);

export default OpenLinkOutlineMd;
