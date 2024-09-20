import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SortingVOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8 17a1 1 0 1 0 2 0V7a1 1 0 0 0-2 0v10zm6 0a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v10z" />
  </SvgIcon>
);

export default SortingVOutlineMd;
