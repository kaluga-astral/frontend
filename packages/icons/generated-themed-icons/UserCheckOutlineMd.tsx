import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UserCheckOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-9 4.17C3 14.42 4.511 13 6.375 13H13a1 1 0 0 1 1 1v.114a1 1 0 0 1-1 1H6.375c-.621 0-1.125.473-1.125 1.057v2.126c0 .467.326.878.802 1.012l.465.131c1.051.297 3.255.445 5.462.446.56 0 1.021.45 1.021 1.01v.114c0 .544-.435.99-.98.99-2.439.001-4.88-.177-6.15-.535l-.465-.131C3.978 20.932 3 19.697 3 18.297v-2.126zm18.718.526a1 1 0 0 0-1.436-1.392l-3.279 3.38-1.27-1.365a1 1 0 0 0-1.465 1.362l1.773 1.906a1.3 1.3 0 0 0 1.885.02l3.792-3.91z"
    />
  </SvgIcon>
);

export default UserCheckOutlineMd;
