import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DialogOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M5 11.5C5 8.5 8.1 6 12 6s7 2.5 7 5.5-3.1 5.5-7 5.5-7-2.4-7-5.5Zm14.8 7.8s-1.5-2.3-.7-3.1a7 7 0 0 0 1.9-4.7C21 7.4 17 4 12 4s-9 3.4-9 7.5c0 4.2 4 7.5 9 7.5 1.4 0 2.8-.3 4-.7a6 6 0 0 0 3.2 1.7h.2a.5.5 0 0 0 .4-.7Z" />
    <path d="M16 9H8a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2Zm-5 3H8a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" />
  </SvgIcon>
);

export default DialogOutlineMd;
