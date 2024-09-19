import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocNoSignatureOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a1 1 0 1 0 0-2H7V5h6v2.5A1.5 1.5 0 0 0 14.5 9H19v-.532a1 1 0 0 0-.36-.768l-4.89-4.075-.194-.161A2 2 0 0 0 12.322 3H7zm12 7h-2v1a1 1 0 1 0 2 0v-1zm-3.5 6.086-1.793-1.793a1 1 0 1 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L16.914 17.5l1.793-1.793a1 1 0 0 0-1.414-1.414L15.5 16.086z" />
  </SvgIcon>
);

export default DocNoSignatureOutlineMd;
