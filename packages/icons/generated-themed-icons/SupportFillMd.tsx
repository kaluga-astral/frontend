import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SupportFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M78.5 57.4a22.8 22.8 0 0 1-17.9 22.3l-2.4-7.3A15.2 15.2 0 0 0 69 65h-9.4a7.6 7.6 0 0 1-7.5-7.6V42.2a7.6 7.6 0 0 1 7.5-7.6h11.2a30.4 30.4 0 0 0-60.3 0h11.2a7.6 7.6 0 0 1 7.6 7.6v15.2a7.6 7.6 0 0 1-7.6 7.6H10.2a7.6 7.6 0 0 1-7.6-7.6v-19a38 38 0 1 1 76 0v19Z" />
  </SvgIcon>
);

export default SupportFillMd;
