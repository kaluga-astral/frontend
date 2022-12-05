import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RefreshOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8 6v3a1 1 0 0 0 2 0V5.1C10 4.5 9.5 4 8.9 4H5a1 1 0 1 0 0 2h3Z" />
    <path d="M9.4 18c-2-1-3.4-3.2-3.4-5.6C6 10 7.2 8 9 6.9a1 1 0 0 0 .1-1.7 1 1 0 0 0-1 0A8.4 8.4 0 0 0 4 12.3c0 3.2 1.8 6.1 4.6 7.5a1 1 0 0 0 1.3-.5 1 1 0 0 0-.5-1.4Zm4.6-3v3.9c0 .6.5 1.1 1.1 1.1H19a1 1 0 1 0 0-2h-3v-3a1 1 0 0 0-2 0Z" />
    <path d="M14.1 4.6a1 1 0 0 0 .5 1.4c2 1 3.4 3.2 3.4 5.6 0 2.3-1.2 4.3-3 5.5a1 1 0 0 0-.4 1.4c.3.5.9.6 1.4.4a8.6 8.6 0 0 0-.6-14.8 1 1 0 0 0-1 0 1 1 0 0 0-.3.5Z" />
  </SvgIcon>
);

export default RefreshOutlineMd;
