import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PhotoFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M2 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0ZM8 4c0-.6.5-1 1-1h6c.6 0 1 .4 1 1v1H8V4Z" />
    <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </SvgIcon>
);

export default PhotoFillMd;
