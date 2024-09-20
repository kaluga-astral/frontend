import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ClockFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-13a1 1 0 0 1 1 1v4.021l1.322 1.91a1 1 0 1 1-1.644 1.138l-1.5-2.167-.178-.256V8a1 1 0 0 1 1-1z" />
  </SvgIcon>
);

export default ClockFillMd;
