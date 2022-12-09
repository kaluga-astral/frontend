import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DraftOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fillRule="evenodd"
      d="M3 5c0-1.1.9-2 2-2h8a1 1 0 1 1 0 2H5v14h14v-7a1 1 0 1 1 2 0v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z"
    />
    <path
      fillRule="evenodd"
      d="M19.2 2.7a1 1 0 0 1 1.4 0l.7.7c.4.4.4 1 0 1.4l-.7.7-2.1-2 .7-.8Zm-1.4 1.4 2 2.1-5.6 5.7-2.1-2.1L17.8 4Zm-4.3 8.5-2.1-2.1-.5 2 .1.5c.1 0 .3.1.4 0l2.1-.4Z"
    />
  </SvgIcon>
);

export default DraftOutlineMd;
