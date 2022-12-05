import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ChevronDOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8.3 10.3a1 1 0 0 0 0 1.4l3 3c.1.2.4.3.7.3.3 0 .6-.1.8-.3l3-3a1 1 0 0 0-.4-1.6 1 1 0 0 0-1.1.2L12 12.6l-2.3-2.3a1 1 0 0 0-1.4 0Z" />
  </SvgIcon>
);

export default ChevronDOutlineMd;
