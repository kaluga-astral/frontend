import React from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';

const LikeFillSm: React.FunctionComponent<SvgIconProps> = ({ ...props }) => (
  <SvgIcon
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M1 7.837v6.288a.85.85 0 0 0 .524.807.868.868 0 0 0 .333.068H3V6.962H1.858a.866.866 0 0 0-.798.543.85.85 0 0 0-.06.332zm13.37-.946a2.665 2.665 0 0 0-2.03-.929H10c.5-2.5.096-3.734-.345-4.253-.851-1.004-2.059-.875-2.971-.03-.912.846-.603 2.783-1.184 3.783-.337.58-1.182 1.245-1.182 1.245A1.76 1.76 0 0 0 4 7.705v5.527c0 .465.189.91.521 1.239a1.78 1.78 0 0 0 1.254.51h5.974a2.637 2.637 0 0 0 2.622-2.193l.592-3.77a2.594 2.594 0 0 0-.592-2.127z" />
  </SvgIcon>
);

export default LikeFillSm;
