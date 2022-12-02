import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const FilterFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M14.3 21v-8l6.4-6.7a1 1 0 0 0 .3-.7v-1c0-.2 0-.3-.2-.4a.6.6 0 0 0-.4-.2H3.6c-.2 0-.3 0-.4.2l-.2.4v1a1 1 0 0 0 .3.7l6.4 6.8v6l4.6 1.9Z" />
  </SvgIcon>
);

export default FilterFillMd;
