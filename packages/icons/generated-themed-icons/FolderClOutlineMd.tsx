import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const FolderClOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M20 19V8h-7.6a3 3 0 0 1-2.1-.9L8.2 5H4v14h16ZM4 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.6a1 1 0 0 1-.7-.3L9.6 3.6A2 2 0 0 0 8.2 3H4Z"
    />
  </SvgIcon>
);

export default FolderClOutlineMd;
