import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const WarningFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m8.9 3.6 4.9 8.7a.7.7 0 0 1-.6 1H2.8a.7.7 0 0 1-.6-1l5-8.7a1 1 0 0 1 1.7 0Zm-.9 2a.7.7 0 0 0-.7.9L7.6 9a.4.4 0 0 0 .8 0l.3-2.5a.7.7 0 0 0-.7-.8Zm0 5.8A.7.7 0 1 0 8 10a.7.7 0 0 0 0 1.5Z" />
  </SvgIcon>
);

export default WarningFillSm;
