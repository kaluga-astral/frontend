import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RequirementOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M31 38a14.6 14.6 0 1 1-11.2-27A14.6 14.6 0 0 1 31 38Zm-12.8 4A18.8 18.8 0 1 0 32.6 7a18.8 18.8 0 0 0-14.4 34.8Zm7.2-13.2a2 2 0 0 1-2-2.1V16a2.1 2.1 0 0 1 3.5-1.5c.4.4.6 1 .6 1.5v10.5a2 2 0 0 1-2 2Zm0 6.2a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1Z" />
  </SvgIcon>
);

export default RequirementOutlineMd;
