import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BasketOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 8H5v13h8v2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2.1a5 5 0 0 1 9.8 0H19a2 2 0 0 1 2 2v7h-2V8h-2v2a1 1 0 1 1-2 0V8H9v2a1 1 0 1 1-2 0V8Zm2.2-2h5.6a3 3 0 0 0-5.6 0ZM18 17a1 1 0 0 0-1 1v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1c0-.6-.4-1-1-1Z" />
  </SvgIcon>
);

export default BasketOutlineMd;
