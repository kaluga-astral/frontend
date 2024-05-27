import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UserCrossOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm.3 7.3a1 1 0 0 1 1.4 0l1.8 1.8 1.8-1.8a1 1 0 0 1 1.4 1.4L20 17.5l1.8 1.8a1 1 0 0 1-1.4 1.4L18.5 19l-1.8 1.8a1 1 0 0 1-1.4-1.4l1.8-1.8-1.8-1.8a1 1 0 0 1 0-1.4ZM3 16.2C3 14.4 4.5 13 6.4 13H12c.6 0 1 .4 1 1v.1c0 .6-.4 1-1 1H6.4c-.6 0-1.2.5-1.2 1v2.2c0 .5.4.9.9 1l.4.1c1 .3 3.3.5 5.5.5.5 0 1 .4 1 1v.1c0 .6-.4 1-1 1-2.4 0-4.9-.2-6.1-.5l-.5-.2a3.2 3.2 0 0 1-2.4-3v-2.1Z"
    />
  </SvgIcon>
);

export default UserCrossOutlineMd;
