import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SentMessageOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M5 16c0 .6.4 1 1 1h5a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V8.8l-4.8 4.8a3.1 3.1 0 0 1-4.4 0L5 8.8V16Zm1-9 5.2 5.2a1.1 1.1 0 0 0 1.6 0L17.9 7H6Zm17.7 11.7c.4-.4.4-1 0-1.4l-3.4-3.4a1 1 0 0 0-1.4 1.4l1.7 1.7H15a1 1 0 1 0 0 2h5.6l-1.7 1.7a1 1 0 0 0 1.4 1.4l3.4-3.4Z"
    />
  </SvgIcon>
);

export default SentMessageOutlineMd;
