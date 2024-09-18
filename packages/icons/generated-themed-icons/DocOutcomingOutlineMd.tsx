import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocOutcomingOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 3a2 2 0 0 0-2 2v5a1 1 0 1 0 2 0V5h6v2.5A1.5 1.5 0 0 0 14.5 9H19v-.532a1 1 0 0 0-.36-.768l-4.89-4.075-.194-.161A2 2 0 0 0 12.322 3H7zm12 7h-2v9H7v-1a1 1 0 1 0-2 0v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9zm-8.414 3-1.293-1.293a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 15H4a1 1 0 1 1 0-2h6.586z" />
  </SvgIcon>
);

export default DocOutcomingOutlineMd;
