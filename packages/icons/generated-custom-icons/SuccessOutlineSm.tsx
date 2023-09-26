import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SuccessOutlineSm: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path
      d="m10.6 6.4-2.5 4a.7.7 0 0 1-1.1.1l-2-2a.8.8 0 1 1 1-1l1.4 1.3 2-3.2a.8.8 0 1 1 1.2.8zM14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0zm-1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        fill: '#00875a',
      }}
    />
  </SvgIcon>
);

export default SuccessOutlineSm;
