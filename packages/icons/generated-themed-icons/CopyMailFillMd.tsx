import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CopyMailFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="m16.8 19-2 2.5a1 1 0 0 1-1.6 0l-2-2.5H6a1 1 0 0 1-1-1V7.1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2ZM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1Z" />
  </SvgIcon>
);

export default CopyMailFillMd;
