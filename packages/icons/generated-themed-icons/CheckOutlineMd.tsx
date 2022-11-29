import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M18.8 6.4a.5.5 0 0 0-.8 0l-7.8 8c-.2.2-.5.2-.7 0L6 10.7a.5.5 0 0 0-.8 0l-.9 1v.6l5.2 5.3c.2.2.5.2.7 0L19.7 8v-.7l-1-1Z" />
  </SvgIcon>
);

export default CheckOutlineMd;
