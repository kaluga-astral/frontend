import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MailFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3 3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm.1 2a.6.6 0 1 0-.7 1l2.3 1.9-1.6 2.3a.6.6 0 1 0 1 .6l1.6-2.2.7.5c1 .8 2.3.8 3.2 0l.7-.5 1.6 2.2a.6.6 0 1 0 1-.6l-1.6-2.3 2.3-2A.6.6 0 1 0 13 5L9 8.2c-.5.4-1.3.4-1.8 0L3.1 5Z"
    />
  </SvgIcon>
);

export default MailFillSm;
