import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ProfileFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20ZM6 15.4a7.5 7.5 0 0 0 6.2 3.6c2.4 0 4.6-1.4 6.1-3.6a9 9 0 0 0-12.3 0Zm6-4.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </SvgIcon>
);

export default ProfileFillMd;
