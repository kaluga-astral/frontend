import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RequestOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M6.4 6H9a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3H6.4l.3-.3a1 1 0 1 0-1.4-1.4l-2 2a1 1 0 0 0 0 1.4l2 2a1 1 0 1 0 1.4-1.4L6.4 6Zm4.6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#2165CC"
    />
  </SvgIcon>
);

export default RequestOutlineSm;
