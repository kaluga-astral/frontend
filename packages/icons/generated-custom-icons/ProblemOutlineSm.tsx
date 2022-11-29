import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ProblemOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      d="M6 11.4 11.4 6A4 4 0 0 1 6 11.4ZM4.6 10A4 4 0 0 1 10 4.6L4.6 10ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
      fill="#F24646"
    />
  </SvgIcon>
);

export default ProblemOutlineSm;
