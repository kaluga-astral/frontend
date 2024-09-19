import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const StorageOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M19 2a3 3 0 0 1 3 3v2c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v2c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2c0-.768.289-1.47.764-2A2.989 2.989 0 0 1 2 13v-2c0-.768.289-1.47.764-2A2.989 2.989 0 0 1 2 7V5a3 3 0 0 1 3-3h14zM4.999 14H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 .999 1zm0 2A1 1 0 0 0 4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4.999zM20 7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </SvgIcon>
);

export default StorageOutlineMd;
