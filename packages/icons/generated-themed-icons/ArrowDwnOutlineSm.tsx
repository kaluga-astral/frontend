import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowDwnOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M11.509 9.449a.75.75 0 0 1 .042 1.06l-3 3.25a.75.75 0 0 1-1.102 0l-3-3.25A.75.75 0 1 1 5.55 9.49l1.699 1.84V2.75a.75.75 0 1 1 1.5 0v8.582l1.699-1.84a.75.75 0 0 1 1.06-.043z" />
  </SvgIcon>
);

export default ArrowDwnOutlineSm;
