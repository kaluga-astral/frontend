import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DotsVOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </SvgIcon>
);

export default DotsVOutlineMd;
