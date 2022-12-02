import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ArrowROutlineLg: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M26.7 15.3c.4.4.4 1 0 1.4L19.4 24a1 1 0 0 1-1.4-1.4l5.6-5.6H5a1 1 0 1 1 0-2h18.6L18 9.4A1 1 0 0 1 19.4 8l7.3 7.3Z" />
  </SvgIcon>
);

export default ArrowROutlineLg;
