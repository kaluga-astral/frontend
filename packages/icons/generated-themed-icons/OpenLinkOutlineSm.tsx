import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const OpenLinkOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12.7 4.3 8.5 8.5a.7.7 0 0 1-1-1l4.2-4.2h-1a.7.7 0 1 1 0-1.3h2.5a.7.7 0 0 1 .8.8v2.5a.7.7 0 1 1-1.3 0v-1Zm-9.4 8.4V3.3h4V2h-4C2.6 2 2 2.6 2 3.3v9.4A1.3 1.3 0 0 0 3.3 14h9.4a1.3 1.3 0 0 0 1.3-1.3v-4h-1.3v4H3.3Z" />
  </SvgIcon>
);

export default OpenLinkOutlineSm;
