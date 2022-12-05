import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CaseOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M17 14h2V9H5v5h2v-1a1 1 0 1 1 2 0v1h6v-1a1 1 0 0 1 2 0v1Zm0 2v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1H5v3h14v-3h-2ZM9 7h6V6H9v1ZM7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2Z" />
  </SvgIcon>
);

export default CaseOutlineMd;
