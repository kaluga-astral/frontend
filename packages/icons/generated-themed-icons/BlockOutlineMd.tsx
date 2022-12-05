import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BlockOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M29.4 37a14 14 0 0 1-13.8-1.8l19.6-19.6c.7 1 1.3 2 1.7 3a14 14 0 0 1 0 10.8 14 14 0 0 1-7.5 7.5Zm3-24.2L12.8 32.4A14 14 0 0 1 14 14a14 14 0 0 1 18.3-1.3ZM17 40.6a18 18 0 0 0 19.6-3.9A18 18 0 0 0 42 24a18 18 0 0 0-5.3-12.7 18 18 0 0 0-19.6-4 18 18 0 0 0-5.8 4 18 18 0 0 0-4 5.8A18 18 0 0 0 6 24c0 2.4.5 4.7 1.4 6.9a18 18 0 0 0 3.9 5.8 18 18 0 0 0 5.8 4Zm0 0" />
  </SvgIcon>
);

export default BlockOutlineMd;
