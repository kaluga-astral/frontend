import { type ReactNode } from 'react';

import { Tooltip } from '../../Tooltip';

type StaticCalendarButtonTooltipProps = {
  title: ReactNode;
  /**
   * @default true
   */
  disableInteractive?: boolean;
  isActive: boolean;
  children: JSX.Element;
};

export const StaticCalendarButtonTooltip = ({
  children,
  title,
  isActive,
  disableInteractive = true,
}: StaticCalendarButtonTooltipProps) => {
  if (isActive) {
    return (
      <Tooltip title={title} disableInteractive={disableInteractive}>
        {children}
      </Tooltip>
    );
  }

  return children;
};
