import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DragOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </SvgIcon>
);

export default DragOutlineMd;
