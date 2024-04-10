import React from 'react';
import { SvgIcon } from '@mui/material';

import { CHECKED_ICON_CLASSES, DEFAULT_ICON_CLASSES } from '../constants';

export const DefaultIcon: React.VFC = ({ ...props }) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      className={DEFAULT_ICON_CLASSES.outerCircle}
    />
    <circle
      cx="12"
      cy="12"
      r="8"
      className={DEFAULT_ICON_CLASSES.innerCircle}
    />
  </SvgIcon>
);

export const CheckedCircleIcon: React.VFC = ({ ...props }) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      className={CHECKED_ICON_CLASSES.outerCircle}
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      className={CHECKED_ICON_CLASSES.innerCircle}
    />
  </SvgIcon>
);
