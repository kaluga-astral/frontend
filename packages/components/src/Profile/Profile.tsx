import {
  type FunctionComponent,
  type PropsWithChildren,
  type ReactNode,
  forwardRef,
} from 'react';
import {
  type AvatarProps,
  ClickAwayListener,
  type MenuProps,
} from '@mui/material';
import { QuitOutlineMd } from '@astral/icons';

import { useMenu } from '../hooks';
import { Chevron } from '../Chevron';
import { useViewportType } from '../hooks/useViewportType';
import { type WithoutEmotionSpecific } from '../types';
import { IconButton } from '../IconButton';

import { MenuList } from './MenuList';
import {
  ProfileAnnotation,
  ProfileAvatar,
  ProfileCredentials,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styles';
import { useLogic } from './useLogic';

export type MenuListType = {
  icon: ReactNode;
  title: ReactNode;
  onClick?: () => void;
};

type ProfileWithMenu = {
  /**
   * Выпадающее меню
   */
  menu: (
    props: PropsWithChildren<WithoutEmotionSpecific<MenuProps>>,
  ) => JSX.Element;
  menuList?: never;
};

type ProfileWithMenuList = {
  menuList?: Array<MenuListType>;
  menu?: never;
};

export type ProfileProps = {
  /**
   * Имя профиля
   */
  displayName: string;
  /**
   * Дополнительная информация (например email или username)
   */
  annotation?: string;
  /**
   * Аватарка профиля
   */
  avatar?: AvatarProps;
  /**
   * Отображение кнопки выхода
   */
  exitButton?: { onClick: () => void };
  /**
   * @example
   * const renderItem: ProfileProps['renderItem'] = ({ title, icon }) => (
   *     <Wrapper>
   *       <Typography variant="caption" color="primary">
   *         {title}
   *       </Typography>
   *       <IconButton variant="text">{icon}</IconButton>
   *     </Wrapper>
   *   );
   */
  renderItem?: FunctionComponent<Omit<MenuListType, 'onClick'>>;
} & (ProfileWithMenu | ProfileWithMenuList);

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const {
      displayName,
      annotation,
      avatar = {},
      menu: Menu,
      menuList,
      exitButton,
      renderItem,
    } = props;
    const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

    const { isMobile } = useViewportType();

    const { hasMenuItem } = useLogic(props);

    return (
      <>
        <ClickAwayListener ref={ref} onClickAway={handleCloseMenu}>
          <ProfileRoot ref={anchorRef} variant="text" onClick={handleOpenMenu}>
            {isMobile && hasMenuItem && (
              <IconButton onClick={exitButton?.onClick} variant="text">
                <QuitOutlineMd />
              </IconButton>
            )}
            {isMobile && !hasMenuItem && <ProfileAvatar {...avatar} />}
            {!isMobile && (
              <ProfileUser>
                <ProfileCredentials>
                  <ProfileDisplayName>{displayName}</ProfileDisplayName>

                  <ProfileAnnotation>{annotation}</ProfileAnnotation>
                </ProfileCredentials>
                <ProfileAvatar {...avatar} />
              </ProfileUser>
            )}
            {!isMobile && <Chevron isActive={open} />}
          </ProfileRoot>
        </ClickAwayListener>
        {Menu ? (
          <Menu
            open={open}
            anchorEl={anchorRef.current}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                maxWidth: 300,
                minWidth: 200,
              },
            }}
          />
        ) : (
          <MenuList
            open={hasMenuItem ? false : open}
            anchorEl={anchorRef.current}
            renderItem={renderItem}
            menuList={menuList}
            onExitClick={exitButton?.onClick}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                maxWidth: 300,
                minWidth: 200,
              },
            }}
          />
        )}
      </>
    );
  },
);

export default Profile;
