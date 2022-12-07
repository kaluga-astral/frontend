import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PageOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M4 3a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H4Zm0 4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H4Zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H4Z"
      fill="#2165CC"
    />
  </SvgIcon>
);

export default PageOutlineSm;
