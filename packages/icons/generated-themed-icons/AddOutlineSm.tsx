import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5H2.754a.75.75 0 1 1 0-1.5H7.25v-4.5A.75.75 0 0 1 8 2z" />
  </SvgIcon>
);

export default AddOutlineSm;
