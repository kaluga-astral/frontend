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
    <path d="M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
  </SvgIcon>
);

export default DragOutlineMd;
