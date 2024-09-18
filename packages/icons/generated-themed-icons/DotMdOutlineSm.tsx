import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DotMdOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <circle cx="8" cy="8" r="3" />
  </SvgIcon>
);

export default DotMdOutlineSm;
