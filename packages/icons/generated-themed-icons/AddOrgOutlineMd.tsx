import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddOrgOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      clip-rule="evenodd"
      d="M1 19V21H11C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19H5V5H13V14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V19H1ZM11 11H7V13H11V11ZM11 7H7V9H11V7Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 14C18.5523 14 19 14.4477 19 15V17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H17V15C17 14.4477 17.4477 14 18 14Z"
    />
  </SvgIcon>
);

export default AddOrgOutlineMd;
