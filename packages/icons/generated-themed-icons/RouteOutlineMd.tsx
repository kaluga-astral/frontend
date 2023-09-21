import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RouteOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 5.5a3.5 3.5 0 0 1 6.9-1l7.7.8a3.7 3.7 0 0 1 0 7.4l-9 .6a1.7 1.7 0 0 0 0 3.4l7.6.7a3.5 3.5 0 1 1 0 2l-7.8-.7a3.7 3.7 0 0 1 0-7.4l9-.6a1.7 1.7 0 0 0 0-3.4l-7.6-.7A3.5 3.5 0 0 1 2 5.5ZM18.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
    />
  </SvgIcon>
);

export default RouteOutlineMd;
