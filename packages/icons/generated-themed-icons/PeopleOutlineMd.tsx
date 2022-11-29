import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PeopleOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M7 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 15a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1a3 3 0 0 1-2.1 2.9l-.5.1a12 12 0 0 1-6.8 0H5a3 3 0 0 1-2-3v-1Zm3-1a1 1 0 0 0-1 1v1c0 .5.3.8.7 1h.4c1.9.7 3.9.7 5.8 0h.4c.4-.2.7-.5.7-1v-1c0-.6-.4-1-1-1H6Zm13.8 4c-1.5.4-3 .5-4.5.3a4 4 0 0 0 .7-2 7 7 0 0 0 3.2-.2l.4-.1c.2 0 .4-.3.4-.6v-.8c0-.3-.3-.6-.6-.6h-3.5a4 4 0 0 0-1.3-2h4.8c1.4 0 2.6 1.2 2.6 2.6v.8c0 1.2-.8 2.2-1.9 2.5l-.3.1Z" />
  </SvgIcon>
);

export default PeopleOutlineMd;
