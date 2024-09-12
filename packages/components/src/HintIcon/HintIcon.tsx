import { Tooltip } from '../Tooltip';
import { BottomDrawer } from '../BottomDrawer';

import { Icon } from './Icon';
import { DrawerContent, IconWrapper } from './styles';
import { useLogic } from './useLogic';

export type HintIconProps = {
  /**
   * Определяет иконку отображения
   */
  variant: 'question' | 'info';
  /**
   * Опции для иконки
   */
  iconOption?: {
    /**
     * Определяет тип иконки
     * @default fill
     */
    variant?: 'fill' | 'outline';
    /**
     * Определяет цвет иконки
     * @default lightGrey
     */
    color?: 'warning' | 'grey' | 'lightGrey';
  };
  /**
   *  Текст заголовка BottomDrawer
   */
  title: string;
  /**
   *  Текст тултипа или контента BottomDrawer
   */
  note: string;
};

export const HintIcon = (props: HintIconProps) => {
  const { variant, title, note, iconOption } = props;

  const { handleClose, handleOpen, open } = useLogic();

  return (
    <>
      <Tooltip title={note} placement="bottom">
        <IconWrapper onClick={handleOpen}>
          <Icon variant={variant} iconOption={iconOption} />
        </IconWrapper>
      </Tooltip>
      <BottomDrawer title={title} open={open} onClose={handleClose}>
        <DrawerContent>{note}</DrawerContent>
      </BottomDrawer>
    </>
  );
};
