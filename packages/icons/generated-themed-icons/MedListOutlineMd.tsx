import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const MedListOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fill-rule="evenodd"
      d="M12.944 3.666 13.414 5H14v1h-4V5h.585l.471-1.334a1.001 1.001 0 0 1 1.888 0ZM8 5H6v14h12V5h-2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5ZM6 3h3.17a3.001 3.001 0 0 1 5.66 0H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm10 8v2H8v-2h8Zm0 6v-2H8v2h8Z"
      clip-rule="evenodd"
    />
  </SvgIcon>
);

export default MedListOutlineMd;
