import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const KeyFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.95-9.515 1.535-1.535 1.414 1.414 1.415-1.414-1.415-1.414.708-.708-1.415-1.414-3.656 3.657a3 3 0 1 0 1.414 1.414zm-1.708 1.294a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </SvgIcon>
);

export default KeyFillMd;
