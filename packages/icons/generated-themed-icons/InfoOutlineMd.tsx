import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const InfoOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M14.679 18.467A7.001 7.001 0 0 1 5 12a7 7 0 1 1 9.679 6.467zm-6.123 1.848a9 9 0 1 0 6.888-16.63 9 9 0 0 0-6.888 16.63zM12 10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    />
  </SvgIcon>
);

export default InfoOutlineMd;
