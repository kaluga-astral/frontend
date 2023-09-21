import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RouteOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fillRule="evenodd"
      d="M3.5 2.8a.8.8 0 1 0 0 1.5.8.8 0 0 0 0-1.5Zm-2.3.7a2.3 2.3 0 0 1 4.5-.2l4.8.3a2.4 2.4 0 0 1 0 4.9l-5 .5a1 1 0 0 0 .1 2l5 .2a2.2 2.2 0 1 1-.3 1.5l-4.8-.3a2.4 2.4 0 0 1 0-4.9l5-.5a1 1 0 0 0-.1-2l-5-.2a2.2 2.2 0 0 1-4.2-1.3Zm11.3 8.3a.8.8 0 1 0 0 1.5.8.8 0 0 0 0-1.6Z"
    />
  </SvgIcon>
);

export default RouteOutlineSm;
