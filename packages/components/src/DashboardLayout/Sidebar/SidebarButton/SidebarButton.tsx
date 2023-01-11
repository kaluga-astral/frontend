import { forwardRef } from 'react';

import { ButtonProps } from '../../../Button';
import { Collapse } from '../../../Collapse';
import { Tooltip } from '../../../Tooltip';

import { Button } from './styles';

type SidebarButtonProps = ButtonProps & {
  /**
   * Состояние свернуто/развернуто меню по горизонтали
   */
  collapsedIn?: boolean;
};

export const SidebarButton = forwardRef<HTMLButtonElement, SidebarButtonProps>(
  (props, ref) => {
    const { children, collapsedIn } = props;

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
