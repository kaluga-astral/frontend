import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12.6 5.5c.2.3.2.8-.1 1l-5.5 5c-.3.3-.7.3-1 0L3.5 9a.8.8 0 0 1 1-1l2 2 5-4.6c.3-.2.8-.2 1 .1Z" />
  </SvgIcon>
);

export default CheckOutlineSm;
