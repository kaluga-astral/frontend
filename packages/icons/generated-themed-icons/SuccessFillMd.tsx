import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SuccessFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM9.4 11l.3.3 1.3 1.3 3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1-1.6Z"
    />
  </SvgIcon>
);

export default SuccessFillMd;
