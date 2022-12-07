import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ChevronROutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M9.8 16.2a1 1 0 0 0 1.4 0l3-3c.2-.1.3-.4.3-.7a1 1 0 0 0-.3-.8l-3-3a1 1 0 0 0-1.6.4 1 1 0 0 0 .2 1.1l2.3 2.3-2.3 2.3a1 1 0 0 0 0 1.4Z" />
  </SvgIcon>
);

export default ChevronROutlineMd;
