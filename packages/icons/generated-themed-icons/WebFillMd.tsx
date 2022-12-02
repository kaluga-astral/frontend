import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const WebFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.9-1.9A7.2 7.2 0 0 1 5 10.4l4.3 4.3v.9c0 1 .8 1.8 1.8 1.8v1.7Zm6.2-2.2a1.8 1.8 0 0 0-1.7-1.3h-.9v-2.7c0-.5-.4-.9-.9-.9H8.4v-1.8h1.8c.5 0 .9-.4.9-.9V7.5h1.8c1 0 1.8-.8 1.8-1.8v-.4A7.2 7.2 0 0 1 17.3 17Z" />
  </SvgIcon>
);

export default WebFillMd;
