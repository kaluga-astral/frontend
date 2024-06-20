import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
const DivisionsOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      fillRule="evenodd"
      d="M7 5h10v14H7V5ZM5 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16H5V5Zm4 2h2v2H9V7Zm4 0h2v2h-2V7Zm-2 4H9v2h2v-2Zm2 0h2v2h-2v-2Zm2 4h-2v2h2v-2Zm-6 0h2v2H9v-2Z"
    />
  </SvgIcon>
);
export default DivisionsOutlineMd;
