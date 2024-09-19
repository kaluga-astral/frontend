import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UpToDateFillSm: React.FunctionComponent<SvgIconProps> = ({
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
      fill-rule="evenodd"
      d="M3.757 12.243a6 6 0 1 0 8.485-8.485 6 6 0 0 0-8.485 8.485zM5.45 7.49A.75.75 0 0 0 6.55 8.51l.699-.84v2.581a.75.75 0 0 0 1.5 0V7.668l.699.84a.75.75 0 1 0 1.102-1.017l-2-2.25a.75.75 0 0 0-1.102 0l-2 2.25z"
    />
  </SvgIcon>
);

export default UpToDateFillSm;
