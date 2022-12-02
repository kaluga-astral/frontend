import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SettingsOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M13.8 22h-3.6a1 1 0 0 1-1-.8l-.4-1.9a8 8 0 0 1-1.5-.9l-1.9.6a1 1 0 0 1-1.1-.4l-1.9-3.2a1 1 0 0 1 .2-1.2L4 12.9V11L2.6 9.8a1 1 0 0 1-.2-1.2l1.9-3.2A1 1 0 0 1 5.4 5l1.9.6a8.3 8.3 0 0 1 1.5-1l.4-1.8a1 1 0 0 1 1-.8h3.6a1 1 0 0 1 1 .8l.4 1.9c.6.2 1 .5 1.5.9l1.9-.6a1 1 0 0 1 1.1.4l1.9 3.2c.2.4.1.9-.2 1.2L20 11.1V13l1.4 1.3c.3.3.4.8.2 1.2l-1.9 3.2a1 1 0 0 1-1.1.4l-1.9-.6a8 8 0 0 1-1.5 1l-.4 1.8a1 1 0 0 1-1 .8Zm-6.2-5.8.8.6a6 6 0 0 0 1.2.7l1 .4.4 2.1h2l.5-2 1-.5 1-.7.9-.6 2 .7 1-1.8-1.5-1.4v-3.4L19.4 9l-1-1.8-2 .7-.8-.6-1.2-.7-1-.4L13 4h-2l-.5 2-.9.5a6 6 0 0 0-1.2.7l-.8.6-2-.7-1 1.8L6 10.3v3.4L4.6 15l1 1.8 2-.7ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2v.5-.5a2 2 0 0 0-2-2Z" />
  </SvgIcon>
);

export default SettingsOutlineMd;
