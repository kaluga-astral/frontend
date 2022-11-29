import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const EditFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M4 19.2a1 1 0 0 0 1.2 1.2l3.8-.8-4.2-4.2-.8 3.8ZM19.8 6.7l-2-2.1a2 2 0 0 0-3 0l-9.7 9.7 5 5 9.7-9.8a2 2 0 0 0 0-2.8Z" />
  </SvgIcon>
);

export default EditFillMd;
