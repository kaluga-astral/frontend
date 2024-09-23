import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SentFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M3.757 12.243a6 6 0 1 0 8.485-8.485 6 6 0 0 0-8.485 8.485zM6.5 5.25a.75.75 0 1 0 0 1.5h1.69L5.47 9.47a.75.75 0 1 0 1.06 1.06l2.72-2.72V9.5a.75.75 0 1 0 1.5 0V6a.75.75 0 0 0-.75-.75H6.5z"
    />
  </SvgIcon>
);

export default SentFillSm;
