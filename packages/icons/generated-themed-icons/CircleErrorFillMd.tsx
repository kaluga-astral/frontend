import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CircleErrorFillMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm3-7.8c0-.2 0-.4-.2-.5L13 12l1.7-1.7a.8.8 0 0 0-1.1-1L12 10.8l-1.7-1.7a.8.8 0 0 0-1 1.1l1.6 1.7-1.7 1.7a.8.8 0 0 0 1.1 1L12 13l1.7 1.7a.8.8 0 0 0 1.3-.6Z"
    />
  </SvgIcon>
);

export default CircleErrorFillMd;
