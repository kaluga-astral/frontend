import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocIncomingOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 1 0-2 0v1H7V5h6v2.5A1.5 1.5 0 0 0 14.5 9H19v-.532a1 1 0 0 0-.36-.768l-4.89-4.075-.194-.161A2 2 0 0 0 12.322 3H7zm10 7a1 1 0 1 0 2 0h-2zm-2.293 1.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L13.414 15H20a1 1 0 1 0 0-2h-6.586l1.293-1.293z" />
  </SvgIcon>
);

export default DocIncomingOutlineMd;
