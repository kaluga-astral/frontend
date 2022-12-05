import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DocumentOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M17 10v9H7V5h6v2.5A1.5 1.5 0 0 0 14.5 9H19v-.5a1 1 0 0 0-.4-.8l-5-4.2a2 2 0 0 0-1.3-.5H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9h-2Z" />
  </SvgIcon>
);

export default DocumentOutlineMd;
