import { type MenuProps as MuiMenuProps } from '@mui/material';
import { QuitOutlineMd } from '@astral/icons';

import { type ProfileMenuItemData } from '../Profile';
import { type WithoutEmotionSpecific } from '../../types';
import { useViewportType } from '../../hooks/useViewportType';
import { BottomDrawer } from '../../BottomDrawer';
import { MenuItem as StyledMenuItem } from '../../MenuItem';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';
import { OverflowTypography } from '../../OverflowTypography';
import { Divider } from '../../Divider';
import { MenuList as StyledMenuList } from '../../MenuList';

import { ExitMenuItem, StyledMenu } from './styles';

type MenuListProps = WithoutEmotionSpecific<MuiMenuProps> & {
  menuList?: Array<ProfileMenuItemData>;
  exitButton?: { onClick: () => void };
};

/**
 * Компонент для рендера menu с помощью массива данных
 */
export const MenuList = (props: MenuListProps) => {
  const { open, onClose, menuList, exitButton, ...restProps } = props;

  const { isMobile } = useViewportType();
  const renderMenuList = () => (
    <>
      {menuList?.map(({ render, icon, title, onClick }) =>
        render ? (
          render({ icon, title, onClick })
        ) : (
          <StyledMenuItem onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
              <OverflowTypography noWrap>{title}</OverflowTypography>
            </ListItemText>
          </StyledMenuItem>
        ),
      )}
      {exitButton && <Divider />}
      <ExitMenuItem
        exitButton={Boolean(exitButton)}
        onClick={exitButton?.onClick}
      >
        <ListItemIcon>
          <QuitOutlineMd />
        </ListItemIcon>
        <ListItemText>
          <OverflowTypography noWrap>Выйти</OverflowTypography>
        </ListItemText>
      </ExitMenuItem>
    </>
  );

  if (isMobile) {
    return (
      <BottomDrawer onClose={onClose} open={open}>
        <StyledMenuList>{renderMenuList()}</StyledMenuList>
      </BottomDrawer>
    );
  }

  return (
    <StyledMenu open={open} onClose={onClose} {...restProps}>
      {renderMenuList()}
    </StyledMenu>
  );
};
