import { Tooltip } from '../../../Tooltip';

type DateCalendarButtonTooltipProps = {
  title: string;
  isActive: boolean;
  children: JSX.Element;
};

export const DateCalendarButtonTooltip = ({
  children,
  title,
  isActive,
}: DateCalendarButtonTooltipProps) => {
  if (isActive) {
    return (
      <Tooltip title={title} disableInteractive>
        {children}
      </Tooltip>
    );
  }

  return children;
};
