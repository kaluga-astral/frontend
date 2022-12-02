import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PitOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="M4.8 10h6.4l-.7-2h-5l-.7 2ZM4 11a1 1 0 0 0-1 1v1h10v-1a1 1 0 0 0-1-1H4Zm1.9-4H10L9 3.6a1 1 0 0 0-1.8 0L5.9 7Z"
      fill="#F24646"
    />
  </SvgIcon>
);

export default PitOutlineSm;
