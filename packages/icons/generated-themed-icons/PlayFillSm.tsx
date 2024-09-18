import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const PlayFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm-.987-8.493A.7.7 0 0 0 6 6.133v3.734a.7.7 0 0 0 1.013.626l3.735-1.867a.7.7 0 0 0 0-1.252L7.013 5.507z"
    />
  </SvgIcon>
);

export default PlayFillSm;
