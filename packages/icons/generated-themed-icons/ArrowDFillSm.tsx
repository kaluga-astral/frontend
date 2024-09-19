import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowDFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 10 5.5 7h5L8 10z" />
  </SvgIcon>
);

export default ArrowDFillSm;
