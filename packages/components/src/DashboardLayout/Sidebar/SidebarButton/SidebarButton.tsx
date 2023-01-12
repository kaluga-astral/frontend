import { forwardRef, useContext } from 'react';

import { ButtonProps } from '../../../Button';
import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';
import { SidebarContext } from '../SidebarProvider';

import { SidebarButton as Button } from './styles';

export const SidebarButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children } = props;
    const { isOpen } = useContext(SidebarContext);

    return (
      <Tooltip
        arrow
        title={children}
        placement="right"
        disableFocusListener={isOpen}
        disableHoverListener={isOpen}
        disableTouchListener={isOpen}
      >
        <Button ref={ref} isOpen={isOpen} {...props}>
          <Collapse orientation="horizontal" in={isOpen}>
            {children}
          </Collapse>
        </Button>
      </Tooltip>
    );
  },
);
