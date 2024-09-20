import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddSmOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5H4.754a.75.75 0 1 1 0-1.5H7.25v-2.5A.75.75 0 0 1 8 4z" />
  </SvgIcon>
);

export default AddSmOutlineSm;
