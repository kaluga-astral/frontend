import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocumentsOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M6.75 3.25v9.5h6.5V7h1.5v6c0 .69-.56 1.25-1.25 1.25h-7c-.69 0-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25h4.766c.37 0 .723.165.96.45l2.234 2.68c.188.225.29.509.29.801V6H12a1 1 0 0 1-1-1V3.25H6.75zm-4.25 0c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25H4v-1.5H2.75v-6.5H4v-1.5H2.5z" />
  </SvgIcon>
);

export default DocumentsOutlineSm;
