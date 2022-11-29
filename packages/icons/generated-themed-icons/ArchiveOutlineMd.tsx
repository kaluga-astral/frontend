import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ArchiveOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M19 3H4.9A2 2 0 0 0 3 5v4h1v10.4A1.7 1.7 0 0 0 5.8 21h12.4a1.7 1.7 0 0 0 1.8-1.6V9h1V5a2 2 0 0 0-2-2Zm-1 16H6V9h12v10Zm1-12H5V5h14v2Zm-4 7H9v-2h6v2Z" />
  </SvgIcon>
);

export default ArchiveOutlineMd;
