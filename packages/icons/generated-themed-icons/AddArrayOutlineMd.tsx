import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddArrayOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v6.083a6.036 6.036 0 0 0-2 0V8H6v12h7c0 .701.12 1.374.341 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2V4zm18 0H4v2h16V4z" />
    <path d="M16 14.6c0 .099-.036.19-.095.259a6.08 6.08 0 0 0-.203.128.403.403 0 0 1-.102.013H8.4a.4.4 0 0 1-.4-.4v-1.2c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v1.2zM8.4 16h6.128a5.997 5.997 0 0 0-1.187 2H8.4a.4.4 0 0 1-.4-.4v-1.2c0-.22.18-.4.4-.4zM8 10.4c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v1.2a.4.4 0 0 1-.4.4H8.4a.4.4 0 0 1-.4-.4v-1.2zM20 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1z" />
  </SvgIcon>
);

export default AddArrayOutlineMd;
