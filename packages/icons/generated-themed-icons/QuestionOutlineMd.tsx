import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const QuestionOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M19.778 12a7.778 7.778 0 1 1-15.556 0 7.778 7.778 0 0 1 15.556 0zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-7.172-4.84a3.99 3.99 0 0 1-1.474 6.588.507.507 0 0 0-.35.472v.782a1.002 1.002 0 0 1-2.004 0v-2.014a1 1 0 0 1 1-.987 1.998 1.998 0 0 0 1.996-2 2.004 2.004 0 0 0-4.007.002c-.002.551-.45.998-1.002.998a.992.992 0 0 1-.982-.904L8 9.95c.017-2.504 2.321-4.436 4.933-3.842a3.975 3.975 0 0 1 1.895 1.052zM13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </SvgIcon>
);

export default QuestionOutlineMd;
