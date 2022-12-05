import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RefreshOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M5 3.5v2.2a.7.7 0 0 0 1.5 0V2.8c0-.4-.4-.8-.8-.8h-3a.8.8 0 0 0 0 1.5H5Z" />
    <path d="M6 12.5a4.7 4.7 0 0 1-2.5-4.2c0-1.7.9-3.3 2.3-4a.8.8 0 0 0 0-1.4.7.7 0 0 0-.8 0 6.3 6.3 0 0 0-3 5.4c0 2.4 1.4 4.6 3.4 5.6.4.2.8 0 1-.3.2-.4 0-.9-.3-1Zm3.5-2.2v2.9c0 .4.4.8.8.8h3a.8.8 0 1 0 0-1.5H11v-2.2a.8.8 0 0 0-1.5 0Z" />
    <path d="M9.6 2.4c-.2.4 0 .9.3 1a5 5 0 0 1 2.6 4.3c0 1.7-.9 3.3-2.3 4A.8.8 0 0 0 10 13c.2.3.6.5 1 .2 1.8-1 3-3.1 3-5.4 0-2.4-1.4-4.6-3.4-5.6a.7.7 0 0 0-.8 0l-.2.3Z" />
  </SvgIcon>
);

export default RefreshOutlineSm;
