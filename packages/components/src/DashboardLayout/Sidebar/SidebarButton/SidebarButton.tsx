import { forwardRef, useContext } from 'react';

import { type ButtonProps } from '../../../Button';
import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';
import { DashboardSidebarContext } from '../../../DashboardSidebarProvider';

import { SidebarButton as Button } from './styles';

export const SidebarButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children } = props;
    const { collapsedIn } = useContext(DashboardSidebarContext);

    return (
      <Tooltip
        arrow
        title={children}
        placement="right"
        disableFocusListener={collapsedIn}
        disableHoverListener={collapsedIn}
        disableTouchListener={collapsedIn}
      >
        <Button ref={ref} isOpen={collapsedIn} {...props}>
          <Collapse orientation="horizontal" in={collapsedIn}>
            {children}
          </Collapse>
        </Button>
      </Tooltip>
    );
  },
);
