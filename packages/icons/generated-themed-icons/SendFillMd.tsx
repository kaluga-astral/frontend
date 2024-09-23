import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SendFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M9.555 20.527c-.932.992-2.577.321-2.577-1.05v-5.308c.754-.439 3.934-2.652 5.91-4.037.357-.25.113-.807-.313-.714-2.011.435-5.127 1.109-6.993 1.504l-3.164-3.35C1.505 6.607 2.178 5 3.496 5h16.913c1.394 0 2.109 1.695 1.149 2.723L9.555 20.527z" />
  </SvgIcon>
);

export default SendFillMd;
