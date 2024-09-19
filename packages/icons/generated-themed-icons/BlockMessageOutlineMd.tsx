import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const BlockMessageOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M5 16a1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4a1 1 0 1 1-2 0V8.753l-4.834 4.833a3.117 3.117 0 0 1-4.41 0L5 8.831V16zm.998-9 5.171 5.172a1.117 1.117 0 0 0 1.583 0L17.924 7H5.998zm14.874 9.307-4.565 4.565a3.333 3.333 0 0 0 4.565-4.565zm-6.18 1.273c-.093.733.06 1.477.436 2.113l4.565-4.565a3.333 3.333 0 0 0-5.001 2.452zm5.221 5.04a5 5 0 1 1-3.826-9.238 5 5 0 0 1 3.826 9.237z" />
  </SvgIcon>
);

export default BlockMessageOutlineMd;
