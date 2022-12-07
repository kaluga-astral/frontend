import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const FolderOpOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M20 10V8a2 2 0 0 0-2-2h-5.6a1 1 0 0 1-.7-.3L9.6 3.6A2 2 0 0 0 8.2 3H4a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14.4a2 2 0 0 0 1.8-1.2l3-7a2 2 0 0 0-1.7-2.8H20Zm-2 0V8h-5.6a3 3 0 0 1-2.1-.9L8.2 5H4v10.3l1.8-4.1A2 2 0 0 1 7.6 10H18ZM7.6 12h13.9l-3.1 7H4.5l3.1-7Z"
    />
  </SvgIcon>
);

export default FolderOpOutlineMd;
