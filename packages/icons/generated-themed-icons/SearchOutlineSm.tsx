import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SearchOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fillRule="evenodd"
      d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.8 4.7a6 6 0 1 1 1-1l2.8 2.8a.7.7 0 1 1-1 1l-2.8-2.8Z"
    />
  </SvgIcon>
);

export default SearchOutlineSm;
