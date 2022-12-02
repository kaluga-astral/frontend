import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CopyOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M8.3 2.5H4c-.3 0-.5.2-.5.5v6.3c0 .2.2.5.5.5h1v1.5H4a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h4.3a2 2 0 0 1 2 2v1H8.8V3c0-.3-.2-.5-.5-.5Zm-.3 4h4c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H8a.5.5 0 0 1-.5-.5V7c0-.3.2-.5.5-.5ZM6 7c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z"
    />
  </SvgIcon>
);

export default CopyOutlineSm;
