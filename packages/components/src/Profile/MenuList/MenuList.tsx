import { Menu as MuiMenu, type MenuProps as MuiMenuProps } from '@mui/material';
import { QuitOutlineMd } from '@astral/icons';
import { type FunctionComponent } from 'react';

import { type MenuListType } from '../Profile';
import { type WithoutEmotionSpecific } from '../../types';
import { useViewportType } from '../../hooks/useViewportType';
import { BottomDrawer } from '../../BottomDrawer';
import { MenuList as StyledMenuList } from '../../MenuList';
import { MenuItem } from '../../MenuItem';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';
import { OverflowTypography } from '../../OverflowTypography';
import { Divider } from '../../Divider';

type MenuListProps = WithoutEmotionSpecific<MuiMenuProps> & {
  menuList?: Array<MenuListType>;
  onExitClick?: () => void;
  renderItem?: FunctionComponent<Omit<MenuListType, 'onClick'>>;
};

export const MenuList = (props: MenuListProps) => {
  const { open, onClose, menuList, onExitClick, renderItem, ...restProps } =
    props;

  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <BottomDrawer onClose={onClose} open={open}>
        <StyledMenuList>
          {menuList?.map(({ icon, title, onClick }) => (
            <MenuItem onClick={onClick}>
              {renderItem ? (
                <>{renderItem({ icon, title })}</>
              ) : (
                <>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>
                    <OverflowTypography noWrap>{title}</OverflowTypography>
                  </ListItemText>
                </>
              )}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={onExitClick}>
            <ListItemIcon>
              <QuitOutlineMd />
            </ListItemIcon>
            <ListItemText>
              <OverflowTypography noWrap>Выйти</OverflowTypography>
            </ListItemText>
          </MenuItem>
        </StyledMenuList>
      </BottomDrawer>
    );
  }

  return (
    <MuiMenu open={open} onClose={onClose} {...restProps}>
      {menuList?.map(({ icon, title, onClick }) => (
        <MenuItem onClick={onClick}>
          {renderItem ? (
            <>{renderItem({ icon, title })}</>
          ) : (
            <>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>
                <OverflowTypography noWrap>{title}</OverflowTypography>
              </ListItemText>
            </>
          )}
        </MenuItem>
      ))}
      <Divider />
      <MenuItem onClick={onExitClick}>
        <ListItemIcon>
          <QuitOutlineMd />
        </ListItemIcon>
        <ListItemText>
          <OverflowTypography noWrap>Выйти</OverflowTypography>
        </ListItemText>
      </MenuItem>
    </MuiMenu>
  );
};
