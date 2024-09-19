import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const CompanyPicFillMd: React.FunctionComponent<SvgIconProps> = ({
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
    <rect width="24" height="24" rx="12" fill="#2165CC" />
    <path
      d="M8.393 7.6c1.208 0 2.132.22 2.772.66.648.44.972 1.128.972 2.064 0 .488-.088.908-.264 1.26a2.176 2.176 0 0 1-.744.852 3.556 3.556 0 0 1-1.2.48 7.572 7.572 0 0 1-1.62.156h-.756V16H6.04V7.804c.352-.08.74-.132 1.164-.156.432-.032.828-.048 1.188-.048zM8.5 8.908c-.384 0-.7.012-.948.036v2.832h.732c.728 0 1.288-.1 1.68-.3.392-.208.588-.596.588-1.164 0-.272-.052-.5-.156-.684a1.121 1.121 0 0 0-.432-.432 1.942 1.942 0 0 0-.66-.216 4.233 4.233 0 0 0-.804-.072zM15.03 16h-1.512V7.684h5.28V8.98H15.03V16z"
      fill="#fff"
    />
  </SvgIcon>
);

export default CompanyPicFillMd;
