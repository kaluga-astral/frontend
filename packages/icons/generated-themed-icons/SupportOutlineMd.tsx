import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const SupportOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12 2C6.486 2 2 6.486 2 12V12.714V16V16.143C2 17.167 2.897 18 4 18H5C5.553 18 6 17.552 6 17V11.857C6 11.305 5.553 10.857 5 10.857H4.092C4.648 6.987 7.978 4 12 4C16.022 4 19.352 6.987 19.908 10.857H19C18.447 10.857 18 11.305 18 11.857V16V17V18C18 19.103 17.103 20 16 20H14C14 19.4477 13.5523 19 13 19H11.5C10.6716 19 10 19.6716 10 20.5C10 21.3284 10.6716 22 11.5 22H14H16C18.206 22 20 20.206 20 18C21.103 18 22 17.167 22 16.143V16V12.714V12C22 6.486 17.514 2 12 2Z" />
  </SvgIcon>
);

export default SupportOutlineMd;
