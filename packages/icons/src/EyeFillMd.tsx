import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgEyeFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.983 15.984a4.005 4.005 0 0 1-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 0 1 4.002 4c0 2.206-1.795 4-4.002 4ZM12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8Z"
      fill={props.fill || props.color}
    />
    <path
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={props.fill || props.color}
    />
  </SvgIcon>
);

export default SvgEyeFillMd;
