import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MenuOffOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M20.7 15.3c.2.2.2.4 0 .6l-.8.8c-.2.2-.4.2-.6 0L15 12.3a.4.4 0 0 1 0-.6l4.4-4.4c.2-.2.4-.2.6 0l.8.8c.2.2.2.4 0 .6l-3 3v.6l3 3ZM3 6.4c0-.2.2-.4.4-.4h12.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H3.4a.4.4 0 0 1-.4-.4V6.4Zm.4 6.6a.4.4 0 0 1-.4-.4v-1.2c0-.2.2-.4.4-.4h9.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H3.4Zm0 5a.4.4 0 0 1-.4-.4v-1.2c0-.2.2-.4.4-.4h12.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H3.4Z" />
  </SvgIcon>
);

export default MenuOffOutlineMd;
