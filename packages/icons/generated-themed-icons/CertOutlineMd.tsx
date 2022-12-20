import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CertOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M9.9 5c1-1.4 3.2-1.4 4.2 0l.6.3a2.7 2.7 0 0 1 3 3c0 .2 0 .5.2.6 1.5 1 1.5 3.2 0 4.3l-.2.6a2.7 2.7 0 0 1-3 3c-.2 0-.4 0-.6.2a2.6 2.6 0 0 1-4.2 0 .6.6 0 0 0-.6-.2 2.7 2.7 0 0 1-3-3c0-.3 0-.5-.2-.6a2.7 2.7 0 0 1 0-4.3l.2-.6a2.7 2.7 0 0 1 3-3c.2 0 .4 0 .6-.2Zm2.6 1.3a.6.6 0 0 0-1 0c-.6.7-1.5 1.1-2.5 1-.4 0-.8.3-.7.7.1 1-.3 2-1 2.5-.4.3-.4.8 0 1a3 3 0 0 1 1 2.5c0 .4.3.8.7.7 1 0 2 .3 2.5 1 .2.4.8.4 1 0 .6-.7 1.5-1 2.5-1 .4.1.8-.3.7-.7-.1-1 .3-1.9 1-2.5.4-.2.4-.7 0-1a2.7 2.7 0 0 1-1-2.5c0-.4-.3-.7-.7-.7-1 .1-2-.3-2.5-1Z"
    />
    <path d="m8.6 15 2.6 1.6L8.7 21l-.8-1.6H6l2.6-4.3Zm7.1 0-2.6 1.6 2.5 4.4.8-1.6h1.9l-2.6-4.3Z" />
  </SvgIcon>
);

export default CertOutlineMd;
