import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SuccessOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M13.3 8A5.2 5.2 0 1 1 2.8 8a5.2 5.2 0 0 1 10.4 0Z" />
  </SvgIcon>
);

export default SuccessOutlineSm;
