import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ContractorsOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M3 3v2h9v10H3v2h7v2a2 2 0 0 0 2 2h9v-2h-9v-2a2 2 0 0 0 2-2V9h7V7h-7V5a2 2 0 0 0-2-2H3zm3 4v2H3v2h3v2l3-3-3-3zm12 4-3 3 3 3v-2h3v-2h-3v-2z" />
  </SvgIcon>
);

export default ContractorsOutlineMd;
