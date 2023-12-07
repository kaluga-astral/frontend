import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ClockOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M12 7c.6 0 1 .4 1 1v4l1.3 2a1 1 0 1 1-1.6 1L11 12.7V8c0-.6.4-1 1-1Zm0 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </SvgIcon>
);

export default ClockOutlineMd;
