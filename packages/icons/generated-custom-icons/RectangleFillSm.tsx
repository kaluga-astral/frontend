import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RectangleFillSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      d="M0 2C0 .9.9 0 2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm4.7 1C3.7 3 3 3.7 3 4.7v6.6c0 1 .7 1.7 1.7 1.7h6.6c1 0 1.7-.7 1.7-1.7V4.7c0-1-.7-1.7-1.7-1.7H4.7ZM5 5v6h6V5H5Z"
      fill="#55B8F0"
    />
  </SvgIcon>
);

export default RectangleFillSm;
