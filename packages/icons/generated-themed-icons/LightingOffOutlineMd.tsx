import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const LightingOffOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M10.6 2a1 1 0 0 0-.891.547l-.763 1.5 1.783.906.484-.953h5.224l-3.17 4.78a1 1 0 0 0 .833 1.553h2.138l-.278.232 1.28 1.536 2.4-2A1 1 0 0 0 19 8.334h-3.037l3.17-4.78A1 1 0 0 0 18.3 2h-7.7zM8.642 9.056 8.03 10.26h1.815L8.642 9.056zM7.155 7.57l-1.646 3.237a1 1 0 0 0 .891 1.453h2.472l-4.739 8.243a1 1 0 0 0 1.507 1.266l8.571-7.142 5.082 5.081a1 1 0 0 0 1.414-1.414l-16-16a1 1 0 0 0-1.414 1.414L7.155 7.57zm5.636 5.637-1.37-1.37-2.77 4.82 4.14-3.45z"
    />
  </SvgIcon>
);

export default LightingOffOutlineMd;
