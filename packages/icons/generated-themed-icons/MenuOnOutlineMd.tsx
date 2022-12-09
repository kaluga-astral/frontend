import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MenuOnOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M4 6.4c0-.2.2-.4.4-.4h15.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H4.4a.4.4 0 0 1-.4-.4V6.4Zm.4 6.6a.4.4 0 0 1-.4-.4v-1.2c0-.2.2-.4.4-.4h15.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H4.4Zm0 5a.4.4 0 0 1-.4-.4v-1.2c0-.2.2-.4.4-.4h15.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H4.4Z" />
  </SvgIcon>
);

export default MenuOnOutlineMd;
