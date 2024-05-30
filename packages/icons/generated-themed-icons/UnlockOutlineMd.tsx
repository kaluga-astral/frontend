import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UnlockOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M9.9 5.9A3 3 0 0 1 15 8v4H7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2V8A5 5 0 0 0 7 8a1 1 0 0 0 2 0c0-.8.3-1.6.9-2.1ZM16 14H7v5h10v-5h-1Z"
    />
  </SvgIcon>
);

export default UnlockOutlineMd;
