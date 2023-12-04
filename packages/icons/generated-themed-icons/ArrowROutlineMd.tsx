import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const ArrowROutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M19.7071 12.8077C20.0976 12.4172 20.0976 11.784 19.7071 11.3935L13.3431 5.02952C12.9526 4.63899 12.3195 4.63899 11.9289 5.02952C11.5384 5.42004 11.5384 6.05321 11.9289 6.44373L17.5858 12.1006L11.9289 17.7574C11.5384 18.148 11.5384 18.7811 11.9289 19.1717C12.3195 19.5622 12.9526 19.5622 13.3431 19.1717L19.7071 12.8077ZM5 11.1006C4.44772 11.1006 4 11.5483 4 12.1006C4 12.6529 4.44772 13.1006 5 13.1006L5 11.1006ZM19 11.1006L5 11.1006L5 13.1006L19 13.1006L19 11.1006Z" />
  </SvgIcon>
);

export default ArrowROutlineMd;
