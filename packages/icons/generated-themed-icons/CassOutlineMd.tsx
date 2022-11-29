import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CassOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12.5 2.1h-1l-2 1-1.7-.8c-.9-.4-1.8.2-1.8 1V7H4.9c-.7 0-1.3.5-1.5 1.2L2 14.7v5.8c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-5.8l-1.4-6.5C20.4 7.5 19.8 7 19 7h-1V3.4c0-1-1-1.5-1.8-1.1l-1.7.7-2-.9ZM8 9V4.6L9 5c.3.2.7.2 1 0l2-.9 2 .9c.3.2.7.2 1 0l1-.4V10H8V9Zm10 3V9h.7l1.3 6.1v.9H4v-.9L5.3 9H6v3h12ZM4 20v-2h16v2H4Zm4.5-7c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-1Zm2.5.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-1Z" />
  </SvgIcon>
);

export default CassOutlineMd;
