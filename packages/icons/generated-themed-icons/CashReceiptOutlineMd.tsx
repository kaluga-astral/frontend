import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const CashReceiptOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M12.8 3.4c-.5-.4-1.1-.4-1.6 0L9 4.8 7.3 3.7C6.3 3 5 3.7 5 4.9V16h-.5c-.8 0-1.5.7-1.5 1.5V22h2v-3h14v3h2v-4.5c0-.8-.7-1.5-1.5-1.5H19V5c0-1.3-1.3-2-2.3-1.3L15 4.8l-2.2-1.4Zm-3 3.2L12 5.2l2.2 1.4c.5.4 1.1.4 1.6 0L17 6v11H7V5.9l1.2.7c.5.4 1.1.4 1.6 0ZM15 10v2H9v-2h6Zm0 5v-2H9v2h6Z"
    />
  </SvgIcon>
);

export default CashReceiptOutlineMd;
