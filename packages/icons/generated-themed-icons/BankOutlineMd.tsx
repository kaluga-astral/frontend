import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const BankOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9 16.6v-6.2c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v6.2c0 .2-.2.4-.4.4H9.4a.4.4 0 0 1-.4-.4ZM3.4 19c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4h17.2c.2 0 .4-.2.4-.4v-1.2c0-.2-.2-.4-.4-.4H3.4Zm10-2h1.2c.2 0 .4-.2.4-.4v-6.2c0-.2-.2-.4-.4-.4h-1.2c-.2 0-.4.2-.4.4v6.2c0 .2.2.4.4.4Zm7.2-9c.2 0 .4-.2.4-.4V6.2c0-.1 0-.2-.2-.3L12.2 1h-.4L3.2 6l-.2.3v1.4c0 .2.2.4.4.4h17.2Zm-14 2H5.4c-.2 0-.4.2-.4.4v6.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4v-6.2c0-.2-.2-.4-.4-.4Zm12 7c.2 0 .4-.2.4-.4v-6.2c0-.2-.2-.4-.4-.4h-1.2c-.2 0-.4.2-.4.4v6.2c0 .2.2.4.4.4h1.2ZM16.9 6 12 3.3 7.1 6H17Z"
    />
  </SvgIcon>
);

export default BankOutlineMd;
