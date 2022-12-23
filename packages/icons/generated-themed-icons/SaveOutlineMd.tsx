import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SaveOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 3h11.3c.2 0 .4 0 .6.3l3.8 3.3c.2.2.3.5.3.8V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Zm2 2H5v14h2v-5.5c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5V19h2V7.8l-3-2.7v2.4c0 .8-.7 1.5-1.5 1.5h-6C7.7 9 7 8.3 7 7.5V5Zm2 0v2h5V5H9Zm6 14H9v-5h6v5Z"
    />
  </SvgIcon>
);

export default SaveOutlineMd;
