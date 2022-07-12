import { forwardRef } from 'react';
import { Avatar, ClickAwayListener } from '@mui/material';

import { useMenu } from '../hooks';
import { Chevron } from '../Chevron';

import {
  ProfileAnnotation,
  ProfileCredentials,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styled';
import { ProfileProps } from './types';

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, annotation, avatar = {}, menu: Menu } = props;
    const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

    return (
      <>
        <ClickAwayListener ref={ref} onClickAway={handleCloseMenu}>
          <ProfileRoot ref={anchorRef} variant="text" onClick={handleOpenMenu}>
            <ProfileUser>
              <ProfileCredentials>
                <ProfileDisplayName>{displayName}</ProfileDisplayName>
                <ProfileAnnotation>{annotation}</ProfileAnnotation>
              </ProfileCredentials>
              <Avatar {...avatar} />
            </ProfileUser>
            <Chevron isActive={open} />
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
