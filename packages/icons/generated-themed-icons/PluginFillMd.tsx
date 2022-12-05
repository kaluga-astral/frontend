import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PluginFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m19.7 11.9-2.9-1.2 2.4-6a1 1 0 1 0-2-.7L15 10l-3.7-1.5 2.4-6a1 1 0 0 0-2-.7l-2.3 6-2.9-1.2-1.2 3 1.6.7L5 15a2.3 2.3 0 0 0 1.2 3l1.2.5-.7 1.6a1.5 1.5 0 0 0 .9 2l.7.3a1.5 1.5 0 0 0 2-.9l.6-1.6 1.4.5a2.3 2.3 0 0 0 2.9-1.2l1.9-4.8 1.4.5 1.2-3Z" />
  </SvgIcon>
);

export default PluginFillMd;
