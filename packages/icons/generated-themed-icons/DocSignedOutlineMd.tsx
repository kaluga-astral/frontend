import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocSignedOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a1 1 0 1 0 0-2H7V5h6v2.5A1.5 1.5 0 0 0 14.5 9H19v-.532a1 1 0 0 0-.36-.768l-4.89-4.075-.194-.161A2 2 0 0 0 12.322 3H7zm12 7h-2v2a1 1 0 1 0 2 0v-2zm.747 6.664a1 1 0 0 0-1.494-1.328L15.04 18.95l-1.26-1.575a1 1 0 1 0-1.56 1.25l1.777 2.222a1.3 1.3 0 0 0 1.987.051l3.763-4.234z" />
  </SvgIcon>
);

export default DocSignedOutlineMd;
