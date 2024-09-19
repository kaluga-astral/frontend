import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const UnreadOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M13.06 3.422a2 2 0 0 0-2.12 0L3.47 8.09A1 1 0 0 0 3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.972a1 1 0 0 0-.47-.882l-7.47-4.668zm4.953 5.454L12 5.118 5.987 8.876 12 11.882l6.013-3.006zM5 19v-8.382l6.106 3.053a2 2 0 0 0 1.788 0L19 10.618V19H5z"
    />
  </SvgIcon>
);

export default UnreadOutlineMd;
