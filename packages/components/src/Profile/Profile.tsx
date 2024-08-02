import { type PropsWithChildren, type ReactNode, forwardRef } from 'react';
import {
  type AvatarProps,
  ClickAwayListener,
  type MenuProps,
} from '@mui/material';

import { useMenu } from '../hooks';
import { Chevron } from '../Chevron';
import { useViewportType } from '../hooks/useViewportType';
import { type WithoutEmotionSpecific } from '../types';

import { MenuList } from './MenuList';
import {
  ProfileAnnotation,
  ProfileAvatar,
  ProfileCredentials,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styles';

export type MenuListType = {
  icon: ReactNode;
  title: string;
  onClick: () => void;
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
  menuList: Array<MenuListType>;
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
  onExitClick?: () => {};
} & (ProfileWithMenu | ProfileWithMenuList);

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const {
      displayName,
      annotation,
      avatar = {},
      menu: Menu,
      menuList,
      onExitClick,
    } = props;
    const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

    const { isMobile } = useViewportType();

    return (
      <>
        <ClickAwayListener ref={ref} onClickAway={handleCloseMenu}>
          <ProfileRoot ref={anchorRef} variant="text" onClick={handleOpenMenu}>
            {isMobile ? (
              <ProfileAvatar {...avatar} />
            ) : (
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
          <MenuList menuList={menuList} onExitClick={onExitClick} />
        )}
      </>
    );
  },
);

export default Profile;
