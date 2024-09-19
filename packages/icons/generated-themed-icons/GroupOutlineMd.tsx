import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const GroupOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M20 22a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2zM4 18a2 2 0 0 0 2 2h6a1 1 0 1 0 0-2H6V6h12v6a1 1 0 1 0 2 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12z" />
  </SvgIcon>
);

export default GroupOutlineMd;
