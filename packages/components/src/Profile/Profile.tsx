import { forwardRef } from 'react';
import { ClickAwayListener } from '@mui/material';

import { useMenu } from '../hooks';
import { Chevron } from '../Chevron';
import { useViewportType } from '../hooks/useViewportType';

import {
  ProfileAnnotation,
  ProfileAvatar,
  ProfileCredentials,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styles';
import { type ProfileProps } from './types';

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, annotation, avatar = {}, menu: Menu } = props;
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
        <Menu
          open={open}
          anchorEl={anchorRef.current}
          onClose={handleCloseMenu}
        />
      </>
    );
  },
);

export default Profile;
