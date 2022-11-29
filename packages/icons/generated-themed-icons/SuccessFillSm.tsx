import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SuccessFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 13.3A5.3 5.3 0 1 1 8 2.7a5.3 5.3 0 0 1 0 10.6ZM9 6 7.4 8.8l-1-1a.7.7 0 1 0-1 1l1.7 1.5a.7.7 0 0 0 1-.2L10 6.6A.7.7 0 0 0 8.9 6Z" />
  </SvgIcon>
);

export default SuccessFillSm;
