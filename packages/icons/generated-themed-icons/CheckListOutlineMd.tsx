import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const CheckListOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M19.005 15S5 14.998 5 14.991C5 14.991 5.001 5 4.995 5c0 0 14.005.002 14.005.009 0 0-.001 9.991.005 9.991zM4.995 3A2.002 2.002 0 0 0 3 5.01v9.981A2.004 2.004 0 0 0 4.995 17h14.01A2.002 2.002 0 0 0 21 14.991V5.009A2.004 2.004 0 0 0 19.005 3H4.995zm10.999 18A2.007 2.007 0 0 0 18 19H6a2.009 2.009 0 0 0 2.006 2h7.988zm-4.02-8.669a.917.917 0 0 1-1.3 0l-1.406-1.405a.92.92 0 0 1 1.3-1.3l.755.754 2.108-2.11a.92.92 0 0 1 1.301 1.298l-2.758 2.763z" />
  </SvgIcon>
);

export default CheckListOutlineMd;
