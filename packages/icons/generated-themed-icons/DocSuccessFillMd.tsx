import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const DocSuccessFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M18.99 8.99v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236A2 2 0 0 0 13 3.136V7.4A1.6 1.6 0 0 0 14.6 9h4.39v-.01zM19 10v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5v4.4a2.6 2.6 0 0 0 2.6 2.6H19zm-7.94 5.393-.977-.976a.869.869 0 1 0-1.229 1.228l1.563 1.563a.869.869 0 0 0 1.198.028l3.438-3.125a.869.869 0 1 0-1.169-1.286l-2.825 2.568z" />
  </SvgIcon>
);

export default DocSuccessFillMd;
