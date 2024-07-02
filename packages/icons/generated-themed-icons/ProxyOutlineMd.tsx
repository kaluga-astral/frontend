import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ProxyOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fillRule="evenodd"
      d="m22 6.9-.1 1.8c-.5 4.9-3.3 11.5-9.9 13.3-6.6-1.8-9.4-8.4-9.9-13.3L2 7c1.7 0 5-2.5 5-4.9h10C17 4.5 20.4 7 22 7Zm-6.5-3a7.9 7.9 0 0 0 2.2 2.8 9.6 9.6 0 0 0 2.4 1.6 18 18 0 0 1-1.9 6.4A10.8 10.8 0 0 1 12 20a11 11 0 0 1-6.2-5.4 20.5 20.5 0 0 1-2-6.4l.5-.2c.7-.3 1.4-.8 2-1.4a7 7 0 0 0 2.2-2.8h7ZM12 14.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm0 1.8a5.5 5.5 0 1 0 0-10.9 5.5 5.5 0 0 0 0 11Zm2.2-5.6a1 1 0 0 0 0-1.2.8.8 0 0 0-1.2 0L11.6 11l-.6-.6a.8.8 0 0 0-1.2 0 1 1 0 0 0 0 1.2L11 13c.4.3.9.3 1.2 0l2-2Z"
    />
  </SvgIcon>
);

export default ProxyOutlineMd;
