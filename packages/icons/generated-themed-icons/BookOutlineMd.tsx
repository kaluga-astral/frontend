import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BookOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M19 2H6c-1.2 0-3 .8-3 3v14c0 2.2 1.8 3 3 3h15v-2H6c-.5 0-1-.2-1-1v-.3c.1-.5.6-.7 1-.7h15V4a2 2 0 0 0-2-2Zm0 14H5V5c0-.8.5-1 1-1h7v7l2-1 2 1V4h2v12Z" />
  </SvgIcon>
);

export default BookOutlineMd;
