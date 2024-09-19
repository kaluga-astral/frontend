import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const NewsOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M6 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6v-.005A4.2 4.2 0 0 1 2 17.8V12a2 2 0 0 1 2-2h2V4zm2 6v10h12V4H8v6zm-2 2H4v5.8a2.2 2.2 0 0 0 2 2.191V12zm4-6h8v6h-8V6zm2 2v2h4V8h-4zm6 5h-8v2h8v-2zm0 3v2h-4v-2h4z" />
  </SvgIcon>
);

export default NewsOutlineMd;
