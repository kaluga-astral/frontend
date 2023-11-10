import React from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const TelegramFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M21 5.5 18 19c-.3 1-.9 1.2-1.7.8l-4.6-3.3-2.3 2c-.2.3-.4.5-.9.5l.3-4.5 8.6-7.3c.3-.3-.1-.5-.6-.2L6.3 13.4 1.7 12c-1-.3-1-1 .2-1.4l17.8-6.5c.8-.3 1.5.2 1.2 1.4Z" />
  </SvgIcon>
);

export default TelegramFillMd;
