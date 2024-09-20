import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SortingOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M3 4a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H3zm0 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H3z" />
  </SvgIcon>
);

export default SortingOutlineSm;
