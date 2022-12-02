import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ChevronLOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M14.2 16.2a1 1 0 0 1-1.4 0l-3-3c-.2-.1-.3-.4-.3-.7 0-.3.1-.6.3-.8l3-3a1 1 0 0 1 1.6.4 1 1 0 0 1-.2 1.1l-2.3 2.3 2.3 2.3a1 1 0 0 1 0 1.4Z" />
    <path d="M14.2 16.2a1 1 0 0 1-1.4 0l-3-3c-.2-.1-.3-.4-.3-.7 0-.3.1-.6.3-.8l3-3a1 1 0 0 1 1.6.4 1 1 0 0 1-.2 1.1l-2.3 2.3 2.3 2.3a1 1 0 0 1 0 1.4Z" />
  </SvgIcon>
);

export default ChevronLOutlineMd;
