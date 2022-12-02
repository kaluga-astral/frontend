import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LocationFillSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12.2 10.9 8 15l-4.2-4.1a5.6 5.6 0 0 1-1.3-6.3c.4-1 1.2-2 2.2-2.6a6.1 6.1 0 0 1 6.6 0c1 .6 1.8 1.5 2.2 2.6a5.6 5.6 0 0 1-1.3 6.3ZM8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </SvgIcon>
);

export default LocationFillSm;
