import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const WarningFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m13.3 5.3 7.4 13.2a1 1 0 0 1-.9 1.5H4.2a1 1 0 0 1-.9-1.5l7.4-13.2a1.5 1.5 0 0 1 2.6 0ZM12 8.5a1 1 0 0 0-1 1.2l.4 3.8a.6.6 0 0 0 1.2 0l.5-3.8A1 1 0 0 0 12 8.5Zm0 8.6a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
  </SvgIcon>
);

export default WarningFillMd;
