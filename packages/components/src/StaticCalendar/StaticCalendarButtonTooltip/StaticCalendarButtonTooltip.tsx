import { type ReactNode } from 'react';

import { Tooltip } from '../../Tooltip';

type StaticCalendarButtonTooltipProps = {
  title: ReactNode;
  isActive: boolean;
  children: JSX.Element;
};

export const StaticCalendarButtonTooltip = ({
  children,
  title,
  isActive,
}: StaticCalendarButtonTooltipProps) => {
  if (isActive) {
    return (
      <Tooltip title={title} disableInteractive>
        {children}
      </Tooltip>
    );
  }

  return children;
};
