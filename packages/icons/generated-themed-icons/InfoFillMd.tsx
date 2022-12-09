import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const InfoFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm1-14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 2c.6 0 1 .4 1 1v5a1 1 0 1 1-2 0v-5c0-.6.4-1 1-1Z"
    />
  </SvgIcon>
);

export default InfoFillMd;
