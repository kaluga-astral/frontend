import React from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const InfoFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-7.333a.667.667 0 0 1 .667.666v3.334a.667.667 0 1 1-1.334 0V7.333A.667.667 0 0 1 8 6.667zm0-2A.667.667 0 1 1 8 6a.667.667 0 0 1 0-1.333z" />
  </SvgIcon>
);

export default InfoFillSm;
