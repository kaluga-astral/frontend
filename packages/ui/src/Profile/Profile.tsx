import { Fragment, forwardRef, useCallback, useRef, useState } from 'react';
import { Avatar, ClickAwayListener } from '@mui/material';
import { ChevronDOutlineMd } from '@astral/icons';

import { Credentials, DisplayName, Email, Root, User } from './styled';
import { ProfileProps } from './types';

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, email, avatar, Menu } = props;

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

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
          <Root ref={anchorRef} variant="text" onClick={handleClick}>
            <User>
              <Credentials>
                <DisplayName>{displayName}</DisplayName>
                <Email>{email}</Email>
              </Credentials>
              {avatar && <Avatar {...avatar} />}
            </User>
            <ChevronDOutlineMd />
          </Root>
        </ClickAwayListener>
        <Menu open={open} anchorEl={anchorRef.current} onClose={handleClose} />
      </Fragment>
    );
  }
);

export default Profile;
