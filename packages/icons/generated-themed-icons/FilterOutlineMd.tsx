import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const FilterOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M20 3H4a1 1 0 0 0-1 1v2.6c0 .5.2 1 .6 1.4L9 13.4V21a1 1 0 0 0 1.4.9l4-2c.4-.2.6-.5.6-.9v-5.6L20.4 8c.4-.4.6-.9.6-1.4V4a1 1 0 0 0-1-1Zm-6.7 9.3a1 1 0 0 0-.3.7v5.4l-2 1V13a1 1 0 0 0-.3-.7L5 6.6V5h14v1.6l-5.7 5.7Z" />
  </SvgIcon>
);

export default FilterOutlineMd;
