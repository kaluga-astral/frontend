import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const QuestionFillMd: React.FunctionComponent<SvgIconProps> = ({
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
      d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-7.2-4.8a4 4 0 0 1 .7 4.7 4 4 0 0 1-2.1 1.8c-.3.1-.4.3-.4.5v.8a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 0 0 2-2 2 2 0 0 0-4 0 1 1 0 0 1-2 0 4 4 0 0 1 5-4 4 4 0 0 1 1.8 1ZM13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </SvgIcon>
);

export default QuestionFillMd;
