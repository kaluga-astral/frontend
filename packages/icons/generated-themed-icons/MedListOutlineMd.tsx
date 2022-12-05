import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const MedListOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="m13 3.7.4 1.3h.6v1h-4V5h.6l.5-1.3a1 1 0 0 1 1.8 0ZM8 5H6v14h12V5h-2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5ZM6 3h3.2a3 3 0 0 1 5.6 0H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Zm10 8v2H8v-2h8Zm0 6v-2H8v2h8Z" />
  </SvgIcon>
);

export default MedListOutlineMd;
