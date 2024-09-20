import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ShareOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fill-rule="evenodd"
      d="M16.7 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 1.065 2.514l-3.376 2.11a3.504 3.504 0 0 1 0 1.753l3.256 2.034a3.5 3.5 0 1 1-1.034 1.712L9.855 14.59a3.5 3.5 0 1 1 0-5.178l3.43-2.143A3.514 3.514 0 0 1 13.2 6.5zm-5.7 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
    />
  </SvgIcon>
);

export default ShareOutlineMd;
