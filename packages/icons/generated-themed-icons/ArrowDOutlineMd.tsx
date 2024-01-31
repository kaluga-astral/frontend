import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowDOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M11.3 19.7c.4.4 1 .4 1.4 0l6.4-6.4a1 1 0 0 0-1.4-1.4L12 17.6l-5.7-5.7A1 1 0 0 0 5 13.3l6.4 6.4ZM13 5a1 1 0 1 0-2 0h2Zm0 14V5h-2v14h2Z" />
  </SvgIcon>
);

export default ArrowDOutlineMd;
