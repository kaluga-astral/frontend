import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocumentOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M4.8 3.3v9.4h6.5V7h1.4v6c0 .7-.5 1.3-1.2 1.3h-7c-.7 0-1.3-.6-1.3-1.3V3c0-.7.6-1.3 1.3-1.3h4.8c.3 0 .7.2 1 .5l2.2 2.7c.1.2.3.5.3.8V6H10a1 1 0 0 1-1-1V3.2H4.7Z" />
  </SvgIcon>
);

export default DocumentOutlineSm;
