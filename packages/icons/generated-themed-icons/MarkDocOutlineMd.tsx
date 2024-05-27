import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const MarkDocOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M7 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3v-2H7V5h6v2.5c0 .8.7 1.5 1.5 1.5H19v-.5a1 1 0 0 0-.4-.8l-4.9-4-.1-.2a2 2 0 0 0-1.3-.5H7Zm12 7h-2v3h2v-3Zm-7 7c0-.6.4-1 1-1h2v3h-3v-2Zm5 4v-2h-2v2h-3v2c0 .6.4 1 1 1h2v-3h2Zm0 0h2v2h-2v-2Zm2-3h-2v-2h3c.6 0 1 .4 1 1v3h-2v-2Z"
    />
  </SvgIcon>
);

export default MarkDocOutlineMd;
