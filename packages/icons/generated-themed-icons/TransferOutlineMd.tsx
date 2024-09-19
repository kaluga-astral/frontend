import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const TransferOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M16.914 3.5A1 1 0 1 0 15.5 4.914L16.586 6H5a1 1 0 0 0 0 2h11.586L15.5 9.086a1 1 0 0 0 1.414 1.414l2.793-2.793a1 1 0 0 0 0-1.414L16.914 3.5zm-12.78 13a1 1 0 0 0 .159 1.206L7.086 20.5A1 1 0 0 0 8.5 19.086l-1.086-1.087H19a1 1 0 1 0 0-2H7.414L8.5 14.914A1 1 0 1 0 7.086 13.5l-2.793 2.792a1 1 0 0 0-.16.207z" />
  </SvgIcon>
);

export default TransferOutlineMd;
