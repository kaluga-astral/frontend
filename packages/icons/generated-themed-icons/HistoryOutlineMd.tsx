import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const HistoryOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M13 6.8a1 1 0 1 0-2 0h2ZM12 12h-1v.5l.4.3.6-.8Zm2.6 3.2a1 1 0 1 0 1.2-1.6l-1.2 1.6Zm-6.9 1.3a1 1 0 1 0 0-2v2Zm-5.4 3.4a1 1 0 1 0 2 0h-2Zm0-9.2a1 1 0 1 0 2 .3l-2-.3ZM11 6.8V12h2V6.7h-2Zm.4 6 3.2 2.4 1.2-1.6-3.2-2.4-1.2 1.6Zm-3.7 1.7H3.8v2h4v-2ZM2.3 16v3.9h2V16h-2Zm17.4-4c0 4.2-3.5 7.7-7.7 7.7v2c5.4 0 9.7-4.3 9.7-9.7h-2ZM12 4.3c4.2 0 7.7 3.5 7.7 7.7h2c0-5.4-4.3-9.7-9.7-9.7v2Zm0 15.4A7.7 7.7 0 0 1 5 15l-1.9.8c1.5 3.4 5 5.8 8.9 5.8v-2ZM4.4 11A7.7 7.7 0 0 1 12 4.3v-2c-5 0-9 3.7-9.6 8.4l2 .3Zm-.6 3.5c-.8 0-1.5.6-1.5 1.5h2c0 .3-.2.5-.5.5v-2Z" />
  </SvgIcon>
);

export default HistoryOutlineMd;
