import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SettingsFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M11.7 16.7a5 5 0 1 1 0-10 5 5 0 1 1 0 10Zm8.4-3.1a2 2 0 0 1 0-3.8.5.5 0 0 0 .3-.6 9 9 0 0 0-.9-2 .5.5 0 0 0-.6-.1 2 2 0 0 1-2.1-.5 2 2 0 0 1-.5-2.2.5.5 0 0 0-.2-.6 9 9 0 0 0-2-.8.5.5 0 0 0-.5.3 2 2 0 0 1-3.8 0 .5.5 0 0 0-.6-.3 9 9 0 0 0-2 .9.5.5 0 0 0-.2.5 2 2 0 0 1-2.6 2.7.5.5 0 0 0-.6.2 9 9 0 0 0-.8 2 .5.5 0 0 0 .3.5 2 2 0 0 1 0 3.8.5.5 0 0 0-.3.5l.7 1.8a.5.5 0 0 0 .7.2c.6-.2 1.3-.2 2 .3.2 0 .3.2.4.3.5.8.5 1.5.2 2.2a.5.5 0 0 0 .1.6 9 9 0 0 0 2.1.9.5.5 0 0 0 .6-.3 2 2 0 0 1 3.8 0 .5.5 0 0 0 .6.3 9 9 0 0 0 2-.9.5.5 0 0 0 .2-.6c-.3-.6-.3-1.4.2-2.2l.3-.3c.8-.5 1.5-.5 2.1-.3a.5.5 0 0 0 .7-.2 9 9 0 0 0 .7-1.7.5.5 0 0 0-.3-.6Z" />
  </SvgIcon>
);

export default SettingsFillMd;
