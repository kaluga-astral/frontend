import { Fragment, forwardRef, useCallback, useRef, useState } from 'react';
import { Avatar, ClickAwayListener } from '@mui/material';

import {
  Annotation,
  Chevron,
  Credentials,
  DisplayName,
  Root,
  User,
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
          <Root ref={anchorRef} variant="text" onClick={handleClick}>
            <User>
              <Credentials>
                <DisplayName>{displayName}</DisplayName>
                <Annotation>{annotation}</Annotation>
              </Credentials>
              <Avatar {...avatar} />
            </User>
            <Chevron open={open} />
          </Root>
        </ClickAwayListener>
        <Menu open={open} anchorEl={anchorRef.current} onClose={handleClose} />
      </Fragment>
    );
  }
);

export default Profile;
