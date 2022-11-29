import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LikeOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M4 12v7a1 1 0 0 0 .6 1H6v-9H5a1 1 0 0 0-1 .6v.4Zm15.3-1a3 3 0 0 0-2.3-1h-2.7l.1-.6c.6-2.9 0-4-.5-4.5a2.4 2.4 0 0 0-1.8-.9 3 3 0 0 0-3 2.8c-.4 1.8-.4 2-1 2.7l-.7 1a2 2 0 0 0-.4 1.2V18a2 2 0 0 0 2 2h7.3a3 3 0 0 0 3-2.5l.7-4a3 3 0 0 0-.7-2.5Zm-2 6.1a1 1 0 0 1-1 .9H9v-6.3l.8-1a7.8 7.8 0 0 0 1.3-3.6c0-.5.3-1.2 1-1.1.7.1.6 2 .3 3.1l-.8 2.9H17a1 1 0 0 1 1 .7v.4l-.7 4Z" />
  </SvgIcon>
);

export default LikeOutlineMd;
