import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MinusOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M5 11.5c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-13a.5.5 0 0 1-.5-.5v-1Z" />
  </SvgIcon>
);

export default MinusOutlineMd;
