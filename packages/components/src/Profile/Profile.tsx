import { type PropsWithChildren, forwardRef, useRef } from 'react';
import {
  type AvatarProps,
  ClickAwayListener,
  type MenuProps,
} from '@mui/material';

import { useMenu } from '../hooks';
import { Chevron } from '../Chevron';
import { useViewportType } from '../hooks/useViewportType';
import { type WithoutEmotionSpecific } from '../types';
import { OverflowTypography } from '../OverflowTypography';

import {
  MenuContainer,
  ProfileAnnotation,
  ProfileAvatar,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styles';

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
   * Выпадающее меню
   */
  menu: (
    props: PropsWithChildren<WithoutEmotionSpecific<MenuProps>>,
  ) => JSX.Element;
};

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, annotation, avatar = {}, menu: Menu } = props;
    const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

    const menuContainerRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useViewportType();

    return (
      <>
        <ClickAwayListener ref={ref} onClickAway={handleCloseMenu}>
          <ProfileRoot ref={anchorRef} variant="text" onClick={handleOpenMenu}>
            {isMobile ? (
              <ProfileAvatar {...avatar} />
            ) : (
              <ProfileUser>
                <OverflowTypography noWrap>
                  <ProfileDisplayName>{displayName}</ProfileDisplayName>
                  <ProfileAnnotation>{annotation}</ProfileAnnotation>
                </OverflowTypography>
                <ProfileAvatar {...avatar} />
              </ProfileUser>
            )}
            {!isMobile && <Chevron isActive={open} />}
          </ProfileRoot>
        </ClickAwayListener>
        <MenuContainer ref={menuContainerRef}>
          <Menu
            open={open}
            anchorEl={anchorRef.current}
            onClose={handleCloseMenu}
            container={menuContainerRef.current}
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
        </MenuContainer>
      </>
    );
  },
);

export default Profile;
