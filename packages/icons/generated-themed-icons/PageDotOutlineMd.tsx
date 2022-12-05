import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PageDotOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <circle cx={12} cy={12} r={2} />
  </SvgIcon>
);

export default PageDotOutlineMd;
