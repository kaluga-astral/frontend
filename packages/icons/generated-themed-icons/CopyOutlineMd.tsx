import React from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const CopyOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      clipRule="evenodd"
      d="M5 2C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H7V16H5V4L14 4V5H16V4C16 2.89543 15.1046 2 14 2H5ZM21 20C21 21.1046 20.1046 22 19 22H10C8.89543 22 8 21.1046 8 20V8C8 6.89543 8.89543 6 10 6L19.0003 6.00126C20.1047 6.00141 21 6.8968 21 8.00126V20ZM10 8L19 8V20H10V8Z"
    />
  </SvgIcon>
);

export default CopyOutlineMd;
