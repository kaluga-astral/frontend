import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UnGroupOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M6 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a1 1 0 1 1-2 0V6H6v12h6a1 1 0 1 1 0 2H6zm10 0a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-6z" />
  </SvgIcon>
);

export default UnGroupOutlineMd;
