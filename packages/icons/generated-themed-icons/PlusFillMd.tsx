import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PlusFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM11 7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7Z" />
  </SvgIcon>
);

export default PlusFillMd;
