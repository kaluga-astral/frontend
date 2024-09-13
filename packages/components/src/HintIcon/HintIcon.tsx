import { BottomDrawer } from '../BottomDrawer';

import { Icon } from './Icon';
import { DrawerContent } from './styles';
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
      <Icon
        onClick={handleOpen}
        variant={variant}
        iconOption={iconOption}
        note={note}
      />
      <BottomDrawer title={title} open={open} onClose={handleClose}>
        <DrawerContent>{note}</DrawerContent>
      </BottomDrawer>
    </>
  );
};
