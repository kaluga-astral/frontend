import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SortUpFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m7.9 3 3.5 4h-7l3.5-4Z" />
    <path d="M8 12 5.5 9h5L8 12Z" color="#557192" />
  </SvgIcon>
);

export default SortUpFillSm;
