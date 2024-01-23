import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const AddDocumentOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M18 12C17.4477 12 17 11.5523 17 11V10.005H19V11C19 11.5523 18.5523 12 18 12ZM12 20C12 19.4477 11.5523 19 11 19H7V5H12.99V7.49C12.99 7.88782 13.148 8.26936 13.4293 8.55066C13.7106 8.83196 14.0922 8.99 14.49 8.99H18.99V8.468C18.99 8.171 18.858 7.89 18.631 7.7L13.557 3.464C13.197 3.164 12.744 3 12.275 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H11C11.5523 21 12 20.5523 12 20Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 14C18.5523 14 19 14.4477 19 15V17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H17V15C17 14.4477 17.4477 14 18 14Z"
    />
  </SvgIcon>
);

export default AddDocumentOutlineMd;
