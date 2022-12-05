import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SortDownFillSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="m8 4 2.5 3h-5L8 4Z" color="#557192" />
    <path d="M8 13 4.5 9h7L8 13Z" />
  </SvgIcon>
);

export default SortDownFillSm;
