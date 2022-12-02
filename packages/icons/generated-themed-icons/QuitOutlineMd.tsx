import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const QuitOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 5V3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7v-2h7V5h-7Z" />
    <path d="M16 13a1 1 0 0 0 1-1 1 1 0 0 0-1-1H6.5l1.2-1.2A1 1 0 0 0 7.4 8a1 1 0 0 0-1.2.2l-2.9 3a1 1 0 0 0 0 1.4l3 3A1 1 0 0 0 8 15a1 1 0 0 0-.3-.8L6.5 13H16Z" />
  </SvgIcon>
);

export default QuitOutlineMd;
