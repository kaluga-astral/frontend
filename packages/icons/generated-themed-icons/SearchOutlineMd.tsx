import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="m16.4 15 4 4a1 1 0 0 1-1.4 1.5l-4-4a7.5 7.5 0 1 1 1.4-1.4Zm-5.9 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
  </SvgIcon>
);

export default SearchOutlineMd;
