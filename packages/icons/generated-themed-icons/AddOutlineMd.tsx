import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const AddOutlineMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M13 5.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5V11H5.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H11v5.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V13h5.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5H13V5.5Z" />
  </SvgIcon>
);

export default AddOutlineMd;
