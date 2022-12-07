import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RoundFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm6 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="#F67E7E"
    />
  </SvgIcon>
);

export default RoundFillSm;
