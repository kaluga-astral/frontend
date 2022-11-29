import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const AllCheckOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M21 3H7v14h14V3ZM7 1a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7Zm10.6 5.7c.5.4.5 1 .2 1.4l-4.2 5.1c-.5.7-1.6.7-2.2.1l-1.6-1.6a1 1 0 1 1 1.4-1.4l1.2 1.2L16.2 7a1 1 0 0 1 1.4-.2ZM3 6a1 1 0 0 0-2 0v15c0 1.1.9 2 2 2h15a1 1 0 1 0 0-2H3V6Z"
    />
  </SvgIcon>
);

export default AllCheckOutlineMd;
