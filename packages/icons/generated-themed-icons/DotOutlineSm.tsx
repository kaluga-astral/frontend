import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DotOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <circle cx={8} cy={8} r={2} />
  </SvgIcon>
);

export default DotOutlineSm;
