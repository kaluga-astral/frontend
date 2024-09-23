import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ExportOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M17.207 7.793a1 1 0 0 1-1.414 1.414L13 6.414V16a1 1 0 1 1-2 0V6.414L8.207 9.207a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 0 1 1.414 0l4.5 4.5zM4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z" />
  </SvgIcon>
);

export default ExportOutlineMd;
