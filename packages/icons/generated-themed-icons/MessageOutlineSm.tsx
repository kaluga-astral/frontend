import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const MessageOutlineSm: React.FunctionComponent<SvgIconProps> = ({
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
    <path
      fill-rule="evenodd"
      d="M5.817 2.583H10.183c1.21.002 2.37.482 3.227 1.337a4.56 4.56 0 0 1 1.34 3.222v.423a4.56 4.56 0 0 1-1.34 3.223 4.578 4.578 0 0 1-3.228 1.336H6.887c-.994 0-1.955.355-2.708 1 0 0 0-.001 0 0l-.041.034c-1.136.972-2.888.165-2.888-1.33V7.142A4.56 4.56 0 0 1 2.59 3.92a4.578 4.578 0 0 1 3.227-1.337zm4.364 1.5H5.82a3.078 3.078 0 0 0-2.17.899m6.532-.899a3.077 3.077 0 0 1 2.17.899 3.06 3.06 0 0 1 .899 2.161v.42a3.06 3.06 0 0 1-.9 2.163 3.078 3.078 0 0 1-2.17.898H6.887c-1.35 0-2.656.482-3.682 1.36l-.041.034a.25.25 0 0 1-.413-.19V7.144a3.06 3.06 0 0 1 .9-2.162"
    />
  </SvgIcon>
);

export default MessageOutlineSm;
