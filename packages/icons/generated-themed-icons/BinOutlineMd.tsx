import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BinOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M7.5 3c-.3 0-.5.2-.5.5V5H3.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H5v13c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V7h1.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5H17V3.5c0-.3-.2-.5-.5-.5h-9ZM7 7h10v12H7V7Zm2 2.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5h-1a.5.5 0 0 1-.5-.5v-7Zm4.5-.5c-.3 0-.5.2-.5.5v7c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.5h-1Z" />
  </SvgIcon>
);

export default BinOutlineMd;
