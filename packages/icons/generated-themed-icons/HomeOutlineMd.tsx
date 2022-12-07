import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const HomeOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M10 19v-4.5a2 2 0 0 1 4 0V19h4a1 1 0 0 0 1-1v-7.8l-6.3-6.3a1 1 0 0 0-1.4 0L5 10.2V18a1 1 0 0 0 1 1h4Zm11-6.8V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5.8a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4L10 2.5a3 3 0 0 1 4.2 0l8.4 8.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.5 0Z" />
  </SvgIcon>
);

export default HomeOutlineMd;
