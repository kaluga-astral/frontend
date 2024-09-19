import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DownLoadVOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M11.53 8.197a.75.75 0 0 0-1.06-1.06L8.75 8.855v-6.19a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3zM2.75 12.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 1 0 0-1.5H2.75z" />
  </SvgIcon>
);

export default DownLoadVOutlineSm;
