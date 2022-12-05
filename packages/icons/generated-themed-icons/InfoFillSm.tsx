import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const InfoFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0-7.3a.7.7 0 0 1 .7.6v3.4a.7.7 0 1 1-1.4 0V7.3a.7.7 0 0 1 .7-.6Zm0-2A.7.7 0 1 1 8 6a.7.7 0 0 1 0-1.3Z" />
  </SvgIcon>
);

export default InfoFillSm;
