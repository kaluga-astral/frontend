import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const CompanyAddOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 5v14h4a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1V4l1-1h10l1 1v8a1 1 0 1 1-2 0V5H8Zm2 2h4v2h-4V7Zm0 4h4v2h-4v-2Zm8 4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1l1-1Z"
    />
  </SvgIcon>
);

export default CompanyAddOutlineMd;
