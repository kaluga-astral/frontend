import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocsArrayOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fillRule="evenodd"
      d="M2 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2V4Zm4 4v12h12V8H6Zm14-4H4v2h16V4ZM8 10.4c0-.2.2-.4.4-.4h7.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H8.4a.4.4 0 0 1-.4-.4v-1.2Zm0 3c0-.2.2-.4.4-.4h7.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H8.4a.4.4 0 0 1-.4-.4v-1.2Zm.4 2.6c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4h7.2c.2 0 .4-.2.4-.4v-1.2c0-.2-.2-.4-.4-.4H8.4Z"
    />
  </SvgIcon>
);

export default DocsArrayOutlineMd;
