import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CalendarOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Zm0 4v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9H5Zm1-5a1 1 0 0 1 2 0v1H6V4Zm10 0a1 1 0 0 1 2 0v1h-2V4Zm-9 9v-2h2v2H7Zm8 0v-2h2v2h-2Zm-4 0v-2h2v2h-2Zm-4 4v-2h2v2H7Zm4 0v-2h2v2h-2Zm4 0v-2h2v2h-2Z" />
  </SvgIcon>
);

export default CalendarOutlineMd;
