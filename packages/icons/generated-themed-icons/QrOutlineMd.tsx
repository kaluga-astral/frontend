import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
const QrOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M3 2H2v6h2V4h4V2H3ZM2 22h6v-2H4v-4H2v6Zm20 0h-6v-2h4v-4h2v6Zm0-20h-6v2h4v4h2V2ZM5 5h6v6H5V5Zm0 8h6v6H5v-6Zm9-8h-1v6h6V5h-5ZM7 7v2h2V7H7Zm0 8v2h2v-2H7Zm8-6V7h2v2h-2Zm0 6v2h2v2h2v-2h-2v-2h2v-2h-2v2h-2Zm0 0v-2h-2v2h2Z"
    />
  </SvgIcon>
);
export default QrOutlineMd;
