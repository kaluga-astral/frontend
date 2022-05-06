import { Fragment, forwardRef, useCallback, useRef, useState } from 'react';
import { Avatar, ClickAwayListener } from '@mui/material';

import {
  ProfileAnnotation,
  ProfileChevron,
  ProfileCredentials,
  ProfileDisplayName,
  ProfileRoot,
  ProfileUser,
} from './styled';
import { ProfileProps } from './types';

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, annotation, avatar = {}, menu: Menu } = props;

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleClick = useCallback(() => {
      setOpen((prevValue) => {
        return !prevValue;
      });
    }, []);

    const handleClickAway = useCallback(() => {
      setOpen(false);
    }, []);

    const handleClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <Fragment>
        <ClickAwayListener ref={ref} onClickAway={handleClickAway}>
          <ProfileRoot ref={anchorRef} variant="text" onClick={handleClick}>
            <ProfileUser>
              <ProfileCredentials>
                <ProfileDisplayName>{displayName}</ProfileDisplayName>
                <ProfileAnnotation>{annotation}</ProfileAnnotation>
              </ProfileCredentials>
              <Avatar {...avatar} />
            </ProfileUser>
            <ProfileChevron open={open} />
          </ProfileRoot>
        </ClickAwayListener>
        <Menu open={open} anchorEl={anchorRef.current} onClose={handleClose} />
      </Fragment>
    );
  }
);

export default Profile;
