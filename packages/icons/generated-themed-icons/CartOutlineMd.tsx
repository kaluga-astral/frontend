import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CartOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M1 2a1 1 0 0 0-1 1c0 .6.5 1 1 1h2.3l2.6 10.5A2 2 0 0 0 8 16h11.6a2 2 0 0 0 1.9-1.5l2.3-8.2a1 1 0 0 0-1-1.3H8.4a1 1 0 0 0 0 2h13l-2 7H8L5.2 3.5a2 2 0 0 0-2-1.5H1Zm17.2 14a3 3 0 0 0-3 3 3 3 0 0 0 6 0 3 3 0 0 0-3-3ZM9 16a3 3 0 0 0-3 3 3 3 0 0 0 6 0 3 3 0 0 0-3-3Zm0 2c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1c0-.6.4-1 1-1Zm9 0c.7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1c0-.6.4-1 1-1Z" />
  </SvgIcon>
);

export default CartOutlineMd;
