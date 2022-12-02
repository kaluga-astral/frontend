import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const InfoOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M51.7 68.3a30.8 30.8 0 1 1-23.5-57 30.8 30.8 0 0 1 23.5 57Zm-27 8.2A39.6 39.6 0 1 0 55.2 3.3a39.6 39.6 0 0 0-30.3 73.2ZM40 31a4.4 4.4 0 0 1 4.4 4.4v22a4.4 4.4 0 1 1-8.9 0v-22A4.4 4.4 0 0 1 40 31Zm0-13.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z" />
  </SvgIcon>
);

export default InfoOutlineMd;
