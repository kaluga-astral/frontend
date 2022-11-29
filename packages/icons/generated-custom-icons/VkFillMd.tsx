import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const VkFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M13 18s.5 0 .7-.3c.2-.2.2-.6.2-.6s0-1.6.8-1.9c.8-.2 1.8 1.6 2.9 2.4.8.5 1.5.4 1.5.4H22s1.5-.1.8-1.3c0 0-.4-.9-2.2-2.4-1.8-1.6-1.6-1.4.6-4.2 1.4-1.7 2-2.8 1.8-3.2-.2-.5-1.2-.4-1.2-.4h-3.3l-.4.1c-.2.1-.3.4-.3.4s-.5 1.3-1.2 2.4c-1.5 2.4-2.1 2.6-2.3 2.4-.6-.3-.5-1.4-.5-2.1 0-2.3.4-3.3-.7-3.6L11.6 6c-1.2 0-2.2 0-2.8.3-.3.1-.6.5-.5.6.3 0 .8 0 1 .4.4.5.3 1.5.3 1.5s.2 2.7-.4 3c-.5.3-1-.2-2.4-2.4-.7-1-1.2-2.3-1.2-2.3s0-.3-.2-.4l-.5-.2H1.7s-.5 0-.6.3c-.2.1 0 .5 0 .5s2.4 5.5 5.2 8.3c2.6 2.5 5.5 2.3 5.5 2.3H13Z"
      fill="#07F"
    />
  </SvgIcon>
);

export default VkFillMd;
