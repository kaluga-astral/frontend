import { useState } from 'react';

import { Tooltip } from '../Tooltip';
import { BottomDrawer } from '../BottomDrawer';
import { useViewportType } from '../hooks';

import { Icon } from './Icon';
import { DrawerContent } from './styles';

export type HintIconProps = {
  variant: 'question' | 'info';
  iconOption?: {
    variant?: 'fill' | 'outline';
    color?: 'warning' | 'grey' | 'lightGrey';
  };
  title: string;
  note: string;
};

export const HintIcon = (props: HintIconProps) => {
  const { variant, title, note, iconOption } = props;

  const [open, setOpen] = useState(false);

  const { isMobile } = useViewportType();
  const handleOpen = () => {
    if (isMobile) {
      setOpen((prevState) => !prevState);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={note} placement="bottom">
        <div onClick={handleOpen}>
          <Icon variant={variant} iconOption={iconOption} />
        </div>
      </Tooltip>
      <BottomDrawer title={title} open={open} onClose={handleClose}>
        <DrawerContent>{note}</DrawerContent>
      </BottomDrawer>
    </>
  );
};
