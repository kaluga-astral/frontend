import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SentFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      d="M4.929 19.071A10 10 0 1 0 19.07 4.928 10 10 0 0 0 4.93 19.071zM10 8.001a1 1 0 0 0 0 2h2.586l-4.293 4.292a1 1 0 1 0 1.414 1.414L14 11.414V14a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1h-5z"
    />
  </SvgIcon>
);

export default SentFillMd;
