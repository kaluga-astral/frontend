import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MailOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M5 7v10h14V7H5Zm14-2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14Z" />
    <path d="M5.5 6.5H3.1c.2.4.4.9.8 1.2l5.9 5.9a3.1 3.1 0 0 0 4.4 0L20 7.7c.4-.3.6-.8.8-1.2h-2.4l-5.6 5.7a1.1 1.1 0 0 1-1.6 0L5.5 6.5Z" />
  </SvgIcon>
);

export default MailOutlineMd;
