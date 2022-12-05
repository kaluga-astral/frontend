import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PrintOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M6 19H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2Zm0-2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2V9H4v8h2ZM8 4v3h8V4H8Zm0 13v3h8v-3H8Zm-3-6.5c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-2a.5.5 0 0 1-.5-.5v-1Z" />
  </SvgIcon>
);

export default PrintOutlineMd;
