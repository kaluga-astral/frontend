import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SuccessFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm2.636-7.602a.75.75 0 1 0-1.272-.795l-2 3.2L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.166-.132l2.5-4Z"
    />
  </SvgIcon>
);

export default SuccessFillSm;
