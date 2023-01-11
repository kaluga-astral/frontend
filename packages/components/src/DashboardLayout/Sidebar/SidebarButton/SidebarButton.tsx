import { forwardRef, useContext } from 'react';

import { ButtonProps } from '../../../Button';
import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';
import { SidebarContext } from '../SidebarProvider';

import { Button } from './styles';

export const SidebarButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children } = props;
    const { collapsedIn } = useContext(SidebarContext);

    return (
      <Tooltip
        arrow
        title={children}
        placement="right"
        disableFocusListener={collapsedIn}
        disableHoverListener={collapsedIn}
        disableTouchListener={collapsedIn}
      >
        <Button ref={ref} collapsedIn={collapsedIn} {...props}>
          <Collapse orientation="horizontal" in={collapsedIn}>
            {children}
          </Collapse>
        </Button>
      </Tooltip>
    );
  },
);
