import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6Zm0 2h12v14H6V5Zm10 10H8v2h8v-2Zm-8-4h8v2H8v-2Zm8-4H8v2h8V7Z"
    />
  </SvgIcon>
);

export default DocOutlineMd;
