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

export type MenuItem = {
  icon: ReactNode;
  title: ReactNode;
  onClick?: () => void;
  /**
   * @example
   * const render: MenuItem['render'] = ({ title, icon, onClick }) => (
   *     <Wrapper onClick={onClick}>
   *       <Typography variant="caption" color="primary">
   *         {title}
   *       </Typography>
   *       <IconButton variant="text">{icon}</IconButton>
   *     </Wrapper>
   *   );
   */
  render?: FunctionComponent<Omit<MenuItem, 'render'>>;
};

type ProfileWithMenu = {
  /**
   * Кастомный рендер menu. Перекрывает menuList и exitButton
   */
  menu: (
    props: PropsWithChildren<WithoutEmotionSpecific<MenuProps>>,
  ) => JSX.Element;
  menuList?: never;
};

type ProfileWithMenuList = {
  /**
   * Рендер menu через массив данных. Перекрывает menu и может использоваться с exitButton
   */
  menuList?: Array<MenuItem>;
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
   * Отображение кнопки выхода и действие на нее
   */
  exitButton?: { onClick: () => void };
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
          <MenuList
            open={open}
            anchorEl={anchorRef.current}
            menuList={menuList}
            exitButton={exitButton}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          />
        )}
      </>
    );
  },
);

export default Profile;
