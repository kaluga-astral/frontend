import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CalculatorFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M17.5 2h-11c-1 0-2 .9-2 2v16c0 1.1 1 2 2 2h11c1 0 2-.9 2-2V4c0-1.1-1-2-2-2ZM7.2 5.3c0-.3.3-.6.6-.6h8.4c.3 0 .6.3.6.6v1.2c0 .3-.3.6-.6.6H7.8a.6.6 0 0 1-.6-.6V5.3Zm2 13.2c0 .3-.3.6-.6.6h-.8a.6.6 0 0 1-.6-.6v-.6c0-.3.3-.6.6-.6h.8c.3 0 .6.3.6.6v.6Zm0-3.5c0 .3-.3.6-.6.6h-.8a.6.6 0 0 1-.6-.6v-.5c0-.4.3-.6.6-.6h.8c.3 0 .6.2.6.6v.5Zm3.8 3.5c0 .3-.2.6-.6.6h-.8a.6.6 0 0 1-.5-.6v-.6c0-.3.2-.6.5-.6h.8c.4 0 .6.3.6.6v.6Zm0-3.5c0 .3-.2.6-.6.6h-.8a.6.6 0 0 1-.5-.6v-.5c0-.4.2-.6.5-.6h.8c.4 0 .6.2.6.6v.5Zm0-3.5c0 .4-.2.6-.6.6H7.8a.6.6 0 0 1-.6-.6V11c0-.3.3-.6.6-.6h4.6c.4 0 .6.3.6.6v.5Zm3.9 7c0 .3-.3.6-.6.6h-.8a.6.6 0 0 1-.6-.6v-.6c0-.3.3-.6.6-.6h.8c.3 0 .6.3.6.6v.6Zm0-3.5c0 .3-.3.6-.6.6h-.8a.6.6 0 0 1-.6-.6v-.5c0-.4.3-.6.6-.6h.8c.3 0 .6.2.6.6v.5Zm0-3.5c0 .4-.3.6-.6.6h-.8a.6.6 0 0 1-.6-.6V11c0-.3.3-.6.6-.6h.8c.3 0 .6.3.6.6v.5Z" />
  </SvgIcon>
);

export default CalculatorFillMd;
