import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const LightingOnOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M9.709 2.547A1 1 0 0 1 10.6 2h7.7a1 1 0 0 1 .833 1.553l-3.17 4.78H19a1 1 0 0 1 .64 1.769l-14 11.666a1 1 0 0 1-1.507-1.266l4.739-8.243H6.4a1 1 0 0 1-.891-1.453l4.2-8.26zM11.213 4 8.03 10.26h2.57a1 1 0 0 1 .867 1.498L8.65 16.656l7.587-6.323H14.1a1 1 0 0 1-.833-1.552L16.437 4h-5.224z" />
  </SvgIcon>
);

export default LightingOnOutlineMd;
