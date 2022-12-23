import { Tooltip } from '../../../Tooltip';

type DateCalendarBtnTooltipProps = {
  title: string;
  isActive: boolean;
  children: JSX.Element;
};

export const DateCalendarBtnTooltip = ({
  children,
  title,
  isActive,
}: DateCalendarBtnTooltipProps) =>
  isActive ? (
    <Tooltip title={title} disableInteractive>
      {children}
    </Tooltip>
  ) : (
    children
  );
