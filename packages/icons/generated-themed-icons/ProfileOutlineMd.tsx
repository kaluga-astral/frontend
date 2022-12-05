import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ProfileOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2 0A5 5 0 1 1 7 7a5 5 0 0 1 10 0ZM6.4 13C4.5 13 3 14.4 3 16.2v2.1c0 1.4 1 2.6 2.4 3l.5.2c2.5.7 9.7.7 12.2 0l.5-.2a3.2 3.2 0 0 0 2.4-3v-2.1c0-1.8-1.5-3.2-3.4-3.2H6.4Zm-1.2 3.2c0-.6.6-1 1.2-1h11.2c.6 0 1.1.4 1.1 1v2.1c0 .5-.3.9-.8 1l-.4.1a34 34 0 0 1-11 0h-.4a1 1 0 0 1-.8-1.1v-2.1Z"
    />
  </SvgIcon>
);

export default ProfileOutlineMd;
