import { forwardRef } from 'react';

import { Collapse } from '../../../Collapse';

import { SidebarTogglerContent, SidebarTogglerRoot } from './styled';

export type SidebarTogglerProps = {
  collapsedIn: boolean;
  onToggle: () => void;
};

export const SidebarToggler = forwardRef<
  HTMLButtonElement,
  SidebarTogglerProps
>((props, ref) => {
  const { collapsedIn, onToggle } = props;

  const handleButtonClick = () => {
    onToggle();
  };

  return (
    <SidebarTogglerRoot
      ref={ref}
      collapsedIn={collapsedIn}
      onClick={handleButtonClick}
    >
      <Collapse orientation="horizontal" in={collapsedIn}>
        <SidebarTogglerContent>Свернуть меню</SidebarTogglerContent>
      </Collapse>
    </SidebarTogglerRoot>
  );
});
