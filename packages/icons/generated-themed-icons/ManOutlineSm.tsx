import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ManOutlineSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
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
      d="M9.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-7.5 6c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v1.4c0 .3-.2.5-.4.5l-2.3.6c-1.2.3-2.4.3-3.6 0l-2.3-.6a.5.5 0 0 1-.4-.5V10ZM2 10c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1.4a2 2 0 0 1-1.5 2l-2.3.6a9 9 0 0 1-4.4 0l-2.3-.6a2 2 0 0 1-1.5-2V10Z"
    />
  </SvgIcon>
);

export default ManOutlineSm;
