import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PhoneFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M1 1.8c0-.4.4-.8.8-.8h2.5c.4 0 .8.2 1 .6L6.4 4c.3.6.2 1.3-.3 1.7-.6.6-1.3 1.5-.7 2.3.7 1 1.6 2 2.6 2.6.6.4 1.6-.2 2.3-.9.4-.3 1-.5 1.6-.2l2.5 1.2c.4.2.6.6.6 1v2.5c0 .4-.4.8-.8.8C6.9 15 1 9.1 1 1.8Z" />
  </SvgIcon>
);

export default PhoneFillSm;
