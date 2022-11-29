import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BookmarkFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M6 2h13c.3 0 .5.1.7.3.2.2.3.4.3.7v18.8l-.2.1a.5.5 0 0 1-.5 0l-6.8-4.4L5.7 22a.5.5 0 0 1-.6-.1l-.1-.3V3c0-.3.1-.5.3-.7l.6-.3Z" />
  </SvgIcon>
);

export default BookmarkFillMd;
