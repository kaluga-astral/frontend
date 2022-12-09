import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const StarFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M7 2a1 1 0 0 1 2 0l.8 2.5c.1.4.5.7 1 .7h2.7A1 1 0 0 1 14 7l-2.2 1.6a1 1 0 0 0-.4 1.2l.8 2.6a1 1 0 0 1-1.5 1L8.6 12a1 1 0 0 0-1.2 0l-2.2 1.6a1 1 0 0 1-1.5-1.1l.8-2.6a1 1 0 0 0-.4-1.2L2 7a1 1 0 0 1 .6-1.8h2.8a1 1 0 0 0 .9-.7L7 2Z" />
  </SvgIcon>
);

export default StarFillSm;
