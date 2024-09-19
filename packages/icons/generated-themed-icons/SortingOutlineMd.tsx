import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SortingOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 8a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7z" />
  </SvgIcon>
);

export default SortingOutlineMd;
