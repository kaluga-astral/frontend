import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const PhoneOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      fillRule="evenodd"
      d="M8.5 3A2 2 0 0 0 6 2.2a6 6 0 0 0-3.6 7.7c2 5.6 6.2 9.8 11.8 11.8A6 6 0 0 0 22 18c.3-1 0-2-1-2.5l-1.9-1-1.4-.9c-.8-.4-1.7-.4-2.4.1l-.3.2-1.3 1.2c-2-1-3.7-2.7-4.7-4.7a5988.2 5988.2 0 0 0 1.7-2.2c.1-.6 0-1.2-.2-1.8l-.4-.7-1.5-2.6ZM6.7 4l2 3.4-.1.4L7 9.5l-.4.5.2.6c1.2 2.9 3.7 5.4 6.6 6.6l.6.2.5-.4a3500.7 3500.7 0 0 1 2.1-1.6l1.5.8 1.9 1v.1a4 4 0 0 1-5 2.5C9.8 17.9 6 14 4.1 9a4 4 0 0 1 2.5-5Z"
    />
  </SvgIcon>
);

export default PhoneOutlineMd;
