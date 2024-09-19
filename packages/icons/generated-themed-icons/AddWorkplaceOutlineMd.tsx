import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddWorkplaceOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M5 9h14v4a1 1 0 1 0 2 0V9a2 2 0 0 0-2-2h-2V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a1 1 0 1 0 0-2H5V9zm4-2h6V6H9v1zm11 10a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1z" />
  </SvgIcon>
);

export default AddWorkplaceOutlineMd;
