import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ClassmatesFillMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M18.7 21c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4ZM12 6.4a2.9 2.9 0 0 0-3 2.9 2.9 2.9 0 1 0 5.7 0c0-1.6-1.2-3-2.8-3Zm0 4c-.7 0-1.2-.5-1.2-1.1 0-.7.5-1.2 1.2-1.2.6 0 1.2.5 1.2 1.2 0 .6-.6 1.2-1.2 1.2Zm1 4c1.2-.2 1.8-.7 1.9-.8.3-.2.4-.7.1-1a.8.8 0 0 0-1.1-.2s-.7.6-2 .6c-1.2 0-2-.6-2-.6a.8.8 0 0 0-1 .1c-.3.4-.2.9.1 1.1 0 0 .8.6 2 .9l-1.7 1.7a.8.8 0 0 0 .6 1.3c.2 0 .4 0 .5-.2l1.6-1.7 1.6 1.7c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L13 14.5Z"
    />
  </SvgIcon>
);

export default ClassmatesFillMd;
