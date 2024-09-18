import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SaveFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m19.56 7.06-2.622-2.622A1.5 1.5 0 0 0 15.877 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.122a1.5 1.5 0 0 0-.44-1.06V7.06zM12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm1.5-11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z" />
  </SvgIcon>
);

export default SaveFillMd;
