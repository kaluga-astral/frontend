import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DocumentsOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M6 17H5V7h1V5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v-2Zm13-7v9H9V5h6v2.5A1.5 1.5 0 0 0 16.5 9H21v-.5a1 1 0 0 0-.4-.8l-5-4.2a2 2 0 0 0-1.3-.5H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9h-2Z" />
  </SvgIcon>
);

export default DocumentsOutlineMd;
