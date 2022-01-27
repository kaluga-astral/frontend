import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgEyeOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
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
      d="M12 18c-4.536 0-7.999-4.26-7.999-6 0-2.001 3.459-6 8-6 4.376 0 7.998 3.973 7.998 6 0 1.74-3.462 6-7.998 6H12Zm.001-14C6.48 4 2 8.841 2 12c0 3.086 4.576 8 10 8 5.423 0 10-4.914 10-8 0-3.159-4.48-8-10-8"
      fill={props.fill || props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.977 13.984c-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2s-.896 2-2 2Zm0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.207 0 4-1.794 4-4s-1.793-4-4-4Z"
      fill={props.fill || props.color}
    />
  </SvgIcon>
);

export default SvgEyeOutlineMd;
