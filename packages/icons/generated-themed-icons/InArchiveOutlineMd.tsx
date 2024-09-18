import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const InArchiveOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M20 19V8h-7.586a3 3 0 0 1-2.121-.879L8.172 5H4v14h2a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4.172a2 2 0 0 1 1.414.586l2.121 2.121a1 1 0 0 0 .707.293H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2a1 1 0 1 1 0-2h2zm-4.457-.535-2.83 2.828a1 1 0 0 1-1.413 0L8.47 18.465a1 1 0 1 1 1.415-1.414l1.12 1.122v-4.587a1 1 0 0 1 2 0v4.585l1.122-1.121a1 1 0 0 1 1.415 1.415z" />
  </SvgIcon>
);

export default InArchiveOutlineMd;
