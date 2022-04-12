import { forwardRef } from 'react';
import { Avatar, Box } from '@mui/material';
import { ChevronDOutlineMd } from '@astral/icons';

import { DisplayName, Email, Root } from './styled';
import { ProfileProps } from './types';

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const { displayName, email, avatar } = props;

    return (
      <Root ref={ref}>
        <Box px={1}>
          <DisplayName>{displayName}</DisplayName>
          <Email>{email}</Email>
        </Box>
        {avatar && <Avatar {...avatar} />}
        <ChevronDOutlineMd />
      </Root>
    );
  }
);

export default Profile;
