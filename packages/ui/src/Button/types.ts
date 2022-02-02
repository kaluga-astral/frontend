import React from 'react';

import { BaseButtonProps } from '../ButtonBase';

export type ButtonProps = BaseButtonProps & {
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
