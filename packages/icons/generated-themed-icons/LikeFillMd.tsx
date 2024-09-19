import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const LikeFillMd: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M4 12v7a.971.971 0 0 0 .599.922c.12.05.25.077.38.078H6v-9H4.98a.99.99 0 0 0-.912.62A.971.971 0 0 0 4 12zm15.281-.939A3.046 3.046 0 0 0 16.96 10H14c1-3 .11-4.553-.394-5.147A2.432 2.432 0 0 0 11.749 4c-1.733.005-1.163 1.942-1.913 4-.567 1.555-2.04 2-2.436 2.565-.234.335-.36.733-.363 1.141L7 18c.001.532.216 1.041.596 1.416S8.463 20.001 9 20h7.247a3.014 3.014 0 0 0 2.997-2.507l.714-4a2.964 2.964 0 0 0-.677-2.432z" />
  </SvgIcon>
);

export default LikeFillMd;
